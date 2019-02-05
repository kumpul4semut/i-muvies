# React I-Movies

[![npm version](https://badge.fury.io/js/video-react.svg)](https://badge.fury.io/js/video-react) [![Build Status](https://travis-ci.org/video-react/video-react.svg?branch=master)](https://travis-ci.org/video-react/video-react) [![Package Quality](http://npm.packagequality.com/shield/video-react.svg)](http://packagequality.com/#?package=video-react)
[![codecov](https://codecov.io/gh/video-react/video-react/branch/master/graph/badge.svg)](https://codecov.io/gh/video-react/video-react)

Adalah script untuk browser film terinspirasi web online muvie

## Installation

Install `i-movies ` and **beserta dependencia** via NPM

```sh
git clone git clone https://github.com/adipatiarya/i-muvies.git

```
```sh
cd i-movies
```
import css in your app or add video-react styles in your page

```jsx
import '~video-react/dist/video-react.css'; // import css
```

or

```scss
@import '~video-react/styles/scss/video-react'; // or import scss
```

or

```html
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
```

Import the components you need, example:

```js
import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};
```

## Development

Run tests:

```sh
npm test
```

### run from local

```bash
$ npm install
$ npm start
```

## Releasing

### Create Release Branch

To create a release branch and changelog, run the following command, optionally with a semantic release type (major, minor, patch) (if not provided, it will default to semver (it's best to let it default)):

```
./scripts/release <release-type>
```

Verify changelog in branch. Create a PR if everything looks good. Merge when tests are green.

### Tagging and Publishing

Once the release branch is merged, checkout master and run:

./scripts/publish

## Inspiration & Credits

- This project is heavily inspired by [video.js](http://www.videojs.com), and most of our css styles came from [video.js's styles](https://github.com/videojs/video.js/tree/master/src/css).
- The document site is built with [reactstrap](https://github.com/reactstrap/reactstrap).
- All the icons came from [Google Material Icons](https://material.io/icons/)
- Fonts were built by [iconmon](https://icomoon.io/).
