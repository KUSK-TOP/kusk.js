# Kusk.js

This is the Kusk [JavaScript API][docs]

You need to run a kusk environment to use this library.

## Installation

### Node

```bash
npm install kusk.js
```
## Usage

```js
// in node.js
var kuskJS = require('kusk.js');

var kuskJS = new kuskJS('http//remote-node');
console.log(kuskJS);

```

Additionally you can set a provider using `kuskJS.setProvider()` :

```js
kuskJS.setProvider('http//remote-node');
```

## Building

### Requirements

-   [Node.js](https://nodejs.org)
-   [npm](https://www.npmjs.com/)

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Building

Build only the kusk.js package:

```bash
npm run build
```

This will put all the browser build files into the `dist` folder.

### Testing (mocha)

```bash
npm test
```
