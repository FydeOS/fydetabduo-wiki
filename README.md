# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Multi-domain deployment

```
yarn build --locale zh-hans
```
Docusaurus will not add the /zh-hans/ URL prefix.

On your static hosting provider:
- create one deployment per locale
- configure the appropriate build command, using the --locale option
- configure the (sub)domain of your choice for each deployment

## Hybrid

It is possible to have some locales using sub-paths, and others using subdomains.
It is also possible to deploy each locale as a separate subdomain, assemble the subdomains in a single unified domain at the CDN level:
- Deploy your site as fr.docusaurus.io
- Configure a CDN to serve it from docusaurus.io/fr

