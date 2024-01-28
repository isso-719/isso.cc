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

let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

for (const page of pages) {
  const path = page.split("/").filter((p) => p !== "");
  const priority = 0.8 ** path.length;

  sitemap += `<url><loc>${domain}${page}</loc><lastmod>${date.toISOString()}</lastmod><priority>${priority.toFixed(2)}</priority></url>`;
}

sitemap += `</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("Generated public/sitemap.xml");