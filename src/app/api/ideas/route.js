import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataPath = () => path.join(process.cwd(), "src", "data", "ideas.js");

function devOnly() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }
  return null;
}

// POST — add a new note
export async function POST(request) {
  const guard = devOnly();
  if (guard) return guard;

  const body = await request.json();
  const { id, x, y, color, rotation, text } = body;
  if (!id || !text) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

  const current = fs.readFileSync(dataPath(), "utf8");
  const newEntry = `  {\n    id: "${id}",\n    x: ${Math.round(x)},\n    y: ${Math.round(y)},\n    color: "${color}",\n    rotation: ${rotation},\n    text: ${JSON.stringify(text)},\n  },`;
  const insertBefore = "];\n\nexport default ideas;";
  if (!current.includes(insertBefore))
    return NextResponse.json({ error: "Could not parse ideas.js" }, { status: 500 });

  fs.writeFileSync(
    dataPath(),
    current.replace(insertBefore, `${newEntry}\n${insertBefore}`),
    "utf8"
  );
  return NextResponse.json({ ok: true });
}

// PATCH — update position (x, y) or text of an existing note
export async function PATCH(request) {
  const guard = devOnly();
  if (guard) return guard;

  const body = await request.json();
  const { id } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  // Escape id for safe use in regex (ids are Date.now() integers, but be safe)
  const safeId = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let src = fs.readFileSync(dataPath(), "utf8");

  // Update x/y position
  if (body.x !== undefined && body.y !== undefined) {
    const { x, y } = body;
    const pos = new RegExp(
      `(id:\\s*"${safeId}",[\\s\\S]*?x:\\s*)(-?\\d+)([\\s\\S]*?y:\\s*)(-?\\d+)`,
      "m"
    );
    if (!pos.test(src)) return NextResponse.json({ error: "Note not found" }, { status: 404 });
    src = src.replace(pos, `$1${Math.round(x)}$3${Math.round(y)}`);
  }

  // Update text — use a replacement function to avoid $ special patterns in JSON strings
  if (body.text !== undefined) {
    const { text } = body;
    // Matches a JSON double-quoted string (handles escape sequences inside)
    const textPat = new RegExp(
      `(id:\\s*"${safeId}"[\\s\\S]*?text:\\s*)("(?:[^"\\\\]|\\\\.)*")`,
      "m"
    );
    if (!textPat.test(src)) return NextResponse.json({ error: "Note not found" }, { status: 404 });
    const jsonText = JSON.stringify(text);
    src = src.replace(textPat, (_, before) => `${before}${jsonText}`);
  }

  fs.writeFileSync(dataPath(), src, "utf8");
  return NextResponse.json({ ok: true });
}

// DELETE — remove a note by id
export async function DELETE(request) {
  const guard = devOnly();
  if (guard) return guard;

  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const safeId = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const src = fs.readFileSync(dataPath(), "utf8");

  // Remove the entire object block for this id (from opening { to closing },)
  const block = new RegExp(`\\s*\\{[^{}]*?id:\\s*"${safeId}"[\\s\\S]*?\\},`, "m");
  if (!block.test(src)) return NextResponse.json({ error: "Note not found" }, { status: 404 });

  fs.writeFileSync(dataPath(), src.replace(block, ""), "utf8");
  return NextResponse.json({ ok: true });
}
