# @multiformats/sha3 <!-- omit in toc -->

[![multiformats.io](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://multiformats.io)
[![codecov](https://img.shields.io/codecov/c/github/multiformats/js-sha3.svg?style=flat-square)](https://codecov.io/gh/multiformats/js-sha3)
[![CI](https://img.shields.io/github/actions/workflow/status/multiformats/js-sha3/js-test-and-release.yml?branch=master\&style=flat-square)](https://github.com/multiformats/js-sha3/actions/workflows/js-test-and-release.yml?query=branch%3Amaster)

> Multiformats hash functions for SHA3

## Table of contents <!-- omit in toc -->

- [Install](#install)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)

## Install

```console
$ npm i @multiformats/sha3
```

`MultihashHashers`s are exported from this library, they produce `MultihashDigest`s. Details about these can be found in the [multiformats multihash interface definitions](https://github.com/multiformats/js-multiformats/blob/master/src/hashes/interface.ts).

```js
import * as Block from 'multiformats/block'
import * as codec from '@ipld/dag-cbor'
import { sha3256 as hasher } from '@multiformats/sha3'

async function run () {
  const value = { hello: 'world' }
  const block = await Block.encode({ value, hasher, codec })
  console.log(block.cid)
  // -> CID(bafyrmidyqnbqbeh5lmkwavjizfmsz6ezwvjleweh5frwk56akfyugoio2e)
}

run().catch(console.error)
```

## Usage

The `@multiformats/sha3` package exports `sha3*`, `shake*` and `keccak*` `MultihashHasher`s. The Multicodecs [table](https://github.com/multiformats/multicodec/blob/master/table.csv) defines these multihashes.

The following `MultihashHasher`s are exported:

- `sha3224` - SHA3-224
- `sha3256` - SHA3-256
- `sha3384` - SHA3-384
- `sha3512` - SHA3-512
- `shake128` - SHAKE-128 (256 output bits)
- `shake256` - SHAKE-256 (512 output bits)
- `keccak224` - KECCAK-224
- `keccak256` - KECCAK-256
- `keccak384` - KECCAK-384
- `keccak512` - KECCAK-512

e.g. he `sha3-384`, multicodec code `0x15`, may be imported as:

```js
import { sha3384 } from '@multiformats/sha3'
```

## License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
