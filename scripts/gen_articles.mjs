import * as fs from "fs";

// articles 内のフォルダを取得する
let allArticles = fs.readdirSync("articles");
let articles = allArticles.map((article) => {
  const id = article;
  const lines = fs.readFileSync(`articles/${article}/${article}.mdx`, "utf-8").split("\n");
  const title = lines[1].replace("title: ", "");
  const date = lines[2].replace("date: ", "");
  const tags = lines[3].replace("tags: ", "").split(",").map((tag) => tag.trim());
  const summary = lines[4].replace("summary: ", "");
  return {
    id, title, date, tags, summary,
  };
});

// date が新しい順にソートする, 同じ日付はファイル作成時間が新しい順にソートする
articles.sort((a, b) => {
  if (a.date === b.date) {
    const aStat = fs.statSync(`articles/${a.id}.mdx`);
    const bStat = fs.statSync(`articles/${b.id}.mdx`);
    return bStat.mtimeMs - aStat.mtimeMs;
  }
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

fs.writeFileSync("data/articles.json", JSON.stringify(articles));

console.log("Generated data/articles.json");

const latestArticles = articles.slice(0, 5);

fs.writeFileSync("data/latest_articles.json", JSON.stringify(latestArticles));

console.log("Generated data/latest_articles.json");
