.PHONY: gen-articles
gen-articles:
	@node ./scripts/gen_articles.mjs

.PHONY: gen-folders
gen-folders:
	mkdir -p public/static/data && mkdir -p public/static/articles

.PHONY: gen-sitemap
gen-sitemap:
	@test -f public/sitemap.xml && rm public/sitemap.xml || true
	@node ./scripts/gen_sitemap.mjs

.PHONY: clean-blog
clean-blog:
	@test -f public/static/data/articles.json && rm public/static/data/articles.json || true
	@test -f public/static/data/tags.json && rm public/static/data/tags.json || true
	@test -f public/static/data/latest_articles.json && rm public/static/data/latest_articles.json || true

.PHONY: gen
gen: gen-folders clean-blog gen-articles gen-sitemap

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
