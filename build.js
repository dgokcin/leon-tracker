// Build: parse items/*.md frontmatter + task counts, emit dist/ (items.json + index.html).
// Zero dependencies — frontmatter is flat `key: value` (quoted strings, [array] for tags).
const fs = require("fs");
const path = require("path");

const ITEMS_DIR = path.join(__dirname, "items");
const DIST = path.join(__dirname, "dist");

const parseFrontmatter = (src) => {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const out = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([\w -]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    out[kv[1].trim()] = v;
  }
  return out;
};

const items = fs.readdirSync(ITEMS_DIR).filter((f) => f.endsWith(".md")).map((f) => {
  const src = fs.readFileSync(path.join(ITEMS_DIR, f), "utf8");
  const fm = parseFrontmatter(src);
  if (!fm || fm.type !== "leon-item") return null;
  const body = src.replace(/^---\n[\s\S]*?\n---/, "");
  const tasksTotal = (body.match(/^\s*- \[[ xX]\]/gm) || []).length;
  const tasksDone = (body.match(/^\s*- \[[xX]\]/gm) || []).length;
  return {
    file: f,
    title: fm.title || f.replace(/\.md$/, ""),
    category: fm.category || "",
    kind: fm.kind || "buy",
    status: fm.status || "todo",
    priority: fm.priority || "low",
    budget: fm.budget || "",
    picked: fm.picked || "",
    deniz_rec: fm.deniz_rec || "",
    notes: fm.notes || "",
    tasksTotal,
    tasksDone,
  };
}).filter(Boolean);

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);
fs.writeFileSync(path.join(DIST, "items.json"), JSON.stringify(items, null, 2));
fs.copyFileSync(path.join(__dirname, "index.html"), path.join(DIST, "index.html"));
console.log(`built ${items.length} items -> dist/`);
