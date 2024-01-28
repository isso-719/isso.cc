import * as fs from "fs";

const domain = "https://isso.cc";

const staticPages = [
  "/",
  "/blog",
  "/tags",
  "/about",
];

let pages = staticPages;

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

let sitemap = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><div style="all: initial !important;"/>`;

for (const page of pages) {
  sitemap += `<url><loc>${domain}${page}</loc></url>`;
}

sitemap += `</sitemapindex>`;

fs.writeFileSync("public/sitemap.xml", sitemap);