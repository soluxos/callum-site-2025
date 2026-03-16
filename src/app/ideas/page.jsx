import IdeasCanvas from "@/components/IdeasCanvas/IdeasCanvas";
import ideas from "@/data/ideas";

export const metadata = {
  title: "Ideas — Callum Harrod",
  description: "A canvas of half-baked thoughts, sparks, and things worth remembering.",
};

export default function IdeasPage() {
  const isDev = process.env.NODE_ENV === "development";
  return <IdeasCanvas notes={ideas} isDev={isDev} />;
}
