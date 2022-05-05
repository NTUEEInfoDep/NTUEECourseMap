<p align="center">
  <a style="padding-right: 16px;">
    <img src="static/NTUEEINFO_logo.jpeg" height="22" height="28">
  </a>
</p>
<h1 align="center">
  NTUEE Course Map
</h1>

## About

A course map for NTUEE students with Gatsby & Notion

## Plugins

With Gatsby offering a plugin-rich ecosystem, there are a few key plugins that make this project possible.

- [Gatsby-image](https://using-gatsby-image.gatsbyjs.org/) optimizes image loading and provides the correct file paths for output.
- [Gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=gatsby-tranf) gives us access to and transforms the markdown files, using also [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark), [gatsby-remark-normalize-paths](https://www.gatsbyjs.org/packages/gatsby-remark-normalize-paths/?=gatsby-remark-no), & [gatsby-remark-relative-images](https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/?=gatsby-remark-re) to make sure the content in the markdown works properly.
- [Gatsby-transformer-yaml allows](https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/?=gatsby-tranfor) us to use the data in .yaml files, feel free to add [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/?=gatsby-tranfor) if you prefer that format for data files.
- [Gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass) lets us write styles using scss or sass.
- [Gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react) extends the well-known react-helmet, allowing you to adjust content in the ‘head’ of your components.

## Project Structure

- Site-level configuration is stored in `config.json` so it can be exposed to Forestry. This file is loaded in the `gatsby-config.js` to configure Gatsby and all it to be accessible via siteMetaData in your graphql queries.
- Access any of Gatsby's [browser api's](https://www.gatsbyjs.org/docs/browser-apis/) via the `gatsby-browser.js`, or load global styles etc.
- Add and access plugin options or siteMetaData via `gatsby-config.js`
- Access Gatsby's [node api's](https://www.gatsbyjs.org/docs/node-apis/) via `gatsby-node.js`. This is where the creation of new blog pages or nodes is handled.
- Edit styles via `src/styles/...`
- `content/`contains all your markdown blog posts, images & data files (e.g. authors list, info page data).
- `src/pages` is a very important and required directory for Gatsby. This is where all your pages for the site live.
- Blog posts are built from a template that can be accessed at `src/templates`.
- The pages & template are comprised of components from `src/components`.
