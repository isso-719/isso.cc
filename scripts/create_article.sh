#!/bin/bash

name=$1

if [ -z "$name" ]; then
  echo "Please provide a name for the article"
  exit 1
fi

if [ -d "./articles/$name" ]; then
  echo "Article already exists, please choose another name"
  exit 1
fi

mkdir -p ./articles/$name
touch ./articles/$name/$name.mdx

cat << EOF > ./articles/${name}/${name}.mdx
---
title: Implement me!
date: $(date +%Y-%m-%d)
tags: implement, me
summary: Implement me!
author: Your Name
---

# Sample Article

EOF

cd ./public/static/articles
ln -s ../../../articles/${name} ${name}

echo "Article created at ./articles/${name}/${name}.mdx"
exit 0
