#!/usr/bin/sh

# Create Folders and Directories
mkdir assets
mkdir dist
cp .env-example .env

# Install Dependencies
npm i \
  hyperapp

# Install DevDependencies
npm i -D  \
  @babel/cli \
  @babel/core \
  @babel/preset-es2015 \
  @jamen/dev-server \
  autoprefixer \
  clean-css-cli \
  node-sass \
  postcss-cli \
  rollup \
  rollup-plugin-node-resolve \
  rollup-plugin-replace \
  uglify-js

# Cleanup Install
rm install.sh
