import { readFile } from "node:fs/promises";
import { join } from "node:path";
import assert from "node:assert/strict";

const distDir = new URL("../dist/", import.meta.url);

const readDistFile = async path =>
  readFile(new URL(path, distDir), "utf8");

const homepage = await readDistFile("index.html");
const postsIndex = await readDistFile("posts/index.html");
const searchPage = await readDistFile("search/index.html");
const pagefindEntry = JSON.parse(await readDistFile("pagefind/pagefind-entry.json"));

assert.match(homepage, /Featured Writing/, "Homepage should render featured posts");
assert.match(
  homepage,
  /Dev at the speed of thought/,
  "Homepage should include the featured post"
);
assert.match(
  postsIndex,
  /Dev at the speed of thought/,
  "Posts index should list the published post"
);
assert.match(
  searchPage,
  /Search any article \.\.\./,
  "Search page should render the search UI shell"
);
assert.ok(
  pagefindEntry.languages?.en?.page_count >= 1,
  "Pagefind should index at least one English page"
);

const pagefindMetaPath = join(
  "pagefind",
  `pagefind.${pagefindEntry.languages.en.hash}.pf_meta`
);
await readDistFile(pagefindMetaPath);
