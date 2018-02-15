# GNU Make 3.8.2 or above

PATH := $(PATH):node_modules/.bin
SHELL := /bin/bash

.ONESHELL:
.SILENT:

start: fresh
	dev-server dist --watch 'src/**/*.js' 'make js' --watch 'src/**/*.scss' 'make css'

preview: fresh
	dev-server dist --watch 'src/**/*' 'make build'

build: fresh
	babel dist/app.js | uglifyjs -o dist/app.js -c -m --source-map "url='app.js.map',content='dist/app.js.map'" &
	postcss dist/app.css -o dist/app.css -u autoprefixer -m
	cleancss dist/app.css -o dist/app.css --source-map --source-map-inline-sources

fresh: clean move js css

clean:
	rm -rf dist
	mkdir dist

move:
	cp favicon.png dist &
	cp index.html dist &
	cp sitemap.xml dist &
	cp -r assets dist &
	cp -r fonts dist &
	cp -r images dist

js:
	env $$(cat .env) rollup src/app.js -o dist/app.js -f iife -m -c

css:
	node-sass src/app.scss -o dist --source-map true --source-map-contents
