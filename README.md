## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```


## Add typescript
1) Install plugin and ts:
```sh
npm install --save gatsby-plugin-typescript typescript
```
2) Create declarations.d.ts to declare GraphQL:
```ts
declare const graphql: (query: TemplateStringsArray) => void;
```

3) Add ts plugin to gatsby-config.js
```js
'gatsby-plugin-typescript'
```

4) Delete propTypes from code

### Installed plugins:

```sh
npm i gatsby-source-filesystem
```
Needed for query our blogposts from filesystem

```sh
npm i gatsby-transformer-remark
```
Needed for transforming MD files into HTML rendered files

```sh
npm i gatsby-plugin-catch-links
```
Intercept local links from MD and other unReact pages and push it, browser doesnt have to unload the pages

After install, configure plugins in gatsby-config.js

## Install SASS
Install plugin
```sh
npm install --save gatsby-plugin-sass
```
Add plugin to configure file gatsby-config.js
```js
'gatsby-plugin-sass'
```