import * as fs from "fs";

const domain = "https://isso.cc";

const staticPages = [
  "/",
  "/blog",
  "/tags",
  "/about",
];

let pages = staticPages;
const date = new Date();

const articlePrefix = "/blog/";
let allArticles = fs.readdirSync("public/static/articles/");
for (const article of allArticles) {
  pages.push(articlePrefix + article);
}

const tagPrefix = "/tags/";
const tags = JSON.parse(fs.readFileSync("public/static/data/tags.json", "utf-8"));
for (const tag of Object.keys(tags)) {
  pages.push(tagPrefix + tag);
}

let sitemap = "";

for (const page of pages) {
  const path = page.split("/").filter((p) => p !== "");

  sitemap += `${domain}${page}\n`
}

fs.writeFileSync("public/sitemap.txt", sitemap, "utf-8");
console.log("Generated public/sitemap.txt");