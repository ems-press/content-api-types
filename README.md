# EMS Press Content API

Typescript types for the EMS Press Content API. The API follows the [JSON API](https://jsonapi.org/) specification.

### Publish to NPM

Publishing to NPM is done by creating a new _Release_ on Github. The provided tag version for the release is used as the npm version and will be committed to the branch.

### Local Link

You can use [yalc](https://github.com/whitecolor/yalc) to develop in this repo and use it in e.g the ems press website repo without publishing the package for every change:

(we don't use npm link because it does not play well with peerDependencies)

```bash
# clone this repo and go into the package directory
git clone git@github.com:ems-press/content-api-types.git
cd content-api-types
# publishes the package locally via yalc on your mashine
npm run yalc:publish

# clone and go into directory of e.g. ems press.
cd ..
git clone git@github.com:ems-press/website.git
cd website
# link-install the package
# ems-press/website has yalc and a helper script installed so you can run:
npm run link:content-api-types
```
