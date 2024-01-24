#!/bin/bash

name=$1

if [ -z "$name" ]; then
  echo "Please provide a name for the article"
  exit 1
fi

if [ -d "./public/static/articles/$name" ]; then
  echo "Article already exists, please choose another name"
  exit 1
fi

mkdir -p ./public/static/articles/$name
touch .public/static/articles/$name/$name.mdx

cat << EOF > ./public/static/articles/$name/$name.mdx
---
title: Implement me!
date: $(date +%Y-%m-%d)
tags: implement, me
summary: Implement me!
author: Your Name
---

# Sample Article

EOF

echo "Article created at ./public/static/articles/$name/$name.mdx"
exit 0
