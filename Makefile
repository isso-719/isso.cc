.PHONY: gen-articles
gen-articles:
	@node ./scripts/gen_articles.mjs

.PHONY: gen-folders
gen-folders:
	mkdir -p ./data && mkdir -p ./articles

.PHONY: clean-blog
clean-blog:
	@test -f ./data/articles.json && rm ./data/articles.json || true
	@test -f ./data/latest_articles.json && rm ./data/latest_articles.json || true

.PHONY: gen
gen: gen-folders clean-blog gen-articles

.PHONY: build
build:
	npm run build

.PHONY: all
all: gen build

.PHONY: lint
lint:
	npm run lint

.PHONY: article
article:
	sh ./scripts/create_article.sh $(name)
