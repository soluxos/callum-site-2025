// Ideas post-it notes.
// Each entry: { id, x, y, color, rotation, text }
// To add a new note, run the site locally (npm run dev) and use the + button.
// x/y are canvas coordinates (pixels from the canvas origin).

const ideas = [
  {
    id: "1773654984007",
    x: -283,
    y: -94,
    color: "blue",
    rotation: 0.8,
    text: "I'd like to look at creating something that allows me to take a wireframe, hook it up to my codebase or a UI library, and generate UIs with AI",
    author: "Callum",
  },
  {
    id: "1773661910823",
    x: -463,
    y: 119,
    color: "yellow",
    rotation: -1.4,
    text: "Make a spot on my website that I can personally add new post-it style notes for others to read. \n\nIt'd be really cool if I could set colours too.",
    author: "Callum",
  },
  {
    id: "1773667484833",
    x: -46,
    y: 340,
    color: "purple",
    rotation: -0.1,
    text: "I'd love to add a bookshelf section to the site that follows what I've done on YourNextTale",
    author: "Callum",
  },
  {
    id: "1773668083632",
    x: 184,
    y: -119,
    color: "green",
    rotation: -1,
    text: "I'd like to find a new role in design and engineering to make insane stuff like this in the future...",
    author: "Callum",
  },
  {
    id: "1773668206214",
    x: 276,
    y: 227,
    color: "pink",
    rotation: 2,
    text: "A site where I can explore making really clean pieces of UI. Almost like https://goods.so/ but for UI",
    author: "Callum",
  },
  {
    id: "1773668310507",
    x: 34,
    y: 34,
    color: "orange",
    rotation: 0.9,
    text: "An AI guidelines repo for designers. A lot of markdown files for skills are geared way more to engineers.",
    author: "Callum",
  },
  {
    id: "1773669997593",
    x: -215,
    y: 123,
    color: "pink",
    rotation: 1.3,
    text: "If you try and add post-its, they won't be saved, only I get that privelage 😘",
    author: "Callum",
  },
  {
    id: "1773683591324",
    x: 583,
    y: 166,
    color: "blue",
    rotation: -0.6,
    text: "I want to keep adding new pieces of UI to my site, I'm just treating it like my playground for making the stuff I can't make at work! 🥸",
  },
  {
    id: "1774437247670",
    x: 1098,
    y: -435,
    color: "orange",
    rotation: 1.8,
    text: "Your next tale ideas...",
  },
  {
    id: "1774437259067",
    x: 1271,
    y: -357,
    color: "yellow",
    rotation: 1.5,
    text: "I need to look into creating a dynamic book search/scraper. For this I'd be able to search for a book, it would find that book, but also create a data structure that is consistent between books for me.",
  },
  {
    id: "1774437307359",
    x: 1046,
    y: -282,
    color: "yellow",
    rotation: 1.3,
    text: "I need to look into the design for a user profile. This would feel almost like Instagram, but with book shelves...",
  },
];

export default ideas;
