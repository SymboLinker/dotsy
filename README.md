# Dotsy

Dotsy is a JavaScript library with which you can create HTML for randomly positioned, non-overlapping, customized dots. You can set:
- the height and width of the container
- the radius and color of each dot
Then Dotsy calculates the locations and creates the HTML for you.

This library can be used, for example, in software that may focus on:
- subitizing
- counting
- arithmetic

## How to use this library

For a working example to play with online, see [symbolinker.github.io/dotsy](https://symbolinker.github.io/dotsy). The source code of the example can be found in the [docs](https://github.com/SymboLinker/dotsy/tree/main/docs) folder of the repository.

How to add it to your project? There are various ways:

#### Using a `<script>` element

There is no need to download or install anything. Your website just needs to have a `<script>` element that results in getting one of the following files from [jsDelivr](https://www.jsdelivr.com/package/npm/dotsy?path=dist):

- dotsy.es2020-esm.js
- dotsy.es2017-esm.js
- dotsy.es2015-iife.js

<strong>esYEAR</strong>: those are JavaScript language versions.<br/>
<strong>esm</strong>: the ECMAScript module is simply the best choice: easy, safe, future proof.<br/>
<strong>iife</strong>: an immediately invoked function expression for browsers that do not support ESM.

For each of those ".js" files there is a minified version (".min.js") - a smaller file (of only 17 kB) with the same capabilities.

A `<script>` element using the recommended "dotsy.es2017-esm.min.js":

```html
<script type="module">
  import * as dotsy from 'https://cdn.jsdelivr.net/npm/dotsy@0.1.0/dist/dotsy.es2017-esm.min.js';
  let settings = new dotsy.Settings();
  // ...(set settings here)...
  let html = dotsy.getHtml(settings);
  // ...(get your HTML element)...
  yourElement.innerHTML = html;
</script>
```

A `<script>` element using the with-older-browsers-compatible "dotsy.es2015-iife.min.js":

```html
<script src="https://cdn.jsdelivr.net/npm/dotsy@0.1.0/dist/dotsy.es2015-iife.min.js"></script>
<script type="text/javascript">
  window.addEventListener('DOMContentLoaded', (event) => {
    let settings = new dotsy.Settings();
    // ...(set settings here)...
    let html = dotsy.getHtml(settings);
    // ...(get your HTML element)...
    yourElement.innerHTML = html;
  });
</script>
```

#### Using npm

This library has been published to [npm](https://www.npmjs.com/package/dotsy). After opening a folder in VS Code, run in the terminal:

```
npm i dotsy
```

Verify that `dotsy` has been added to the `node_modules` folder. Then you can choose:

Using the CommonJS module (the `.cjs` file) in `myFile.js`:

```js
const dotsy = require('dotsy');
const settings = new dotsy.Settings();
```

Using the ESM module (the `.mjs` file) in `myFile.js` or `myFile.ts`:

```ts
import * as dotsy from 'dotsy';
const settings = new dotsy.Settings();
```


## How to use this repo

Follow these steps to set up (and verify) a development environment for this repository:

1. Install [Node.js](https://nodejs.org/en/download), [Git](https://git-scm.com/downloads) and [VS Code](https://code.visualstudio.com/download).
2. Fork (or clone), checkout and then open the root folder of this repository in VS Code.
3. Open the VS Code Terminal and run:<br/>
   `npm ci`<br/>
   This loads all the devDependencies from the tree as specified in package-lock.json.
4. Compiling the library:<br/>
   All of the following commands run some script as defined in package.json:<br/>
   `npm run strictcheck` to do type checking, to check whether a successful compilation is possible.<br/>
   `npm run clean` to run eslint (performing auto-fixes).<br/>
   `npm test` to run all unit tests from the 'tests' folder.<br/>
   `npm run build` creates a single-file library in different formats and language versions in the 'dist' folder. Note: the 'src' folder contains all the source code files.
5. Testing localhost:<br/>
   For testing localhost with live reload from VS Code, you could install the VS Code extension [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server). Then open '/localhost/index.html' in VS Code and click `> Go Live` in the bottom right corner of VS Code. The browser starts up automatically.


## License

The Dotsy repository uses the most permissive licensing available. The "BSD Zero Clause License" ([0BSD](https://choosealicense.com/licenses/0bsd/)) allows for<br/>
commercial + non-commercial use, closed + open source, with + without modifications, etc. and [is equivalent](https://github.com/github/choosealicense.com/issues/805) to licenses like:

- "MIT No Attribution License" ([MIT-0](https://choosealicense.com/licenses/mit-0//)).
- "The Unlicense" ([Unlicense](https://choosealicense.com/licenses/unlicense/)).
- "CC0" ([CC0](https://choosealicense.com/licenses/cc0/)).

The "BSD Zero Clause License" ([0BSD](https://choosealicense.com/licenses/0bsd/)) does not have the condition

> (...), provided that the above copyright notice and this permission notice appear in all copies.

which is part of the "MIT License" ([MIT](https://choosealicense.com/licenses/mit/)) and its shorter equivalent "ISC License" ([ISC](https://choosealicense.com/licenses/isc/)). Apart from that they are all equivalent.


## Ask or contribute

- [ask questions](https://github.com/Symbolinker/dotsy/discussions) about anything that is not clear or when you'd like help.
- [share](https://github.com/Symbolinker/dotsy/discussions) ideas or what you've made.
- [report a bug](https://github.com/Symbolinker/dotsy/issues).
- [request an enhancement](https://github.com/Symbolinker/dotsy/issues).
- [open a pull request](https://github.com/Symbolinker/dotsy/pulls). (The command `npm run clean` runs eslint.)
