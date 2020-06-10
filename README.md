# js-sha3

Multiformats hash functions for SHA3.

```js
const { multihash } = require('multiformats')()
const sha3 = require('multiformats/sha3')
multihash.add(sha3)

const data = new Uint8Array([...someData])
const hashed = await multihash.hash(data, 'sha3-384')
```
