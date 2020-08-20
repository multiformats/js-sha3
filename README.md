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

This package contains hash functions for `sha3-224`, `sha3-256`, `sha3-384`,`sha3-512`, `shake-128`, `shake-256`, `keccak-224`, `keccak-256`, `keccak-384`, and `keccak-512`.
