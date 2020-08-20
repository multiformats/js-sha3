# js-sha3

Multiformats hash functions for SHA3.

```js
import multiformats from 'multiformats/basics'
import sha3 from '@multiformats/sha3'

const { multihash } = multiformats
multihash.add(sha3)

const data = new Uint8Array([...someData])
const hash = await multihash.hash(data, 'sha3-384')
```
