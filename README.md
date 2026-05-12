# @multiformats/sha3

[![multiformats.io](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://multiformats.io)
[![codecov](https://img.shields.io/codecov/c/github/multiformats/js-sha3.svg?style=flat-square)](https://codecov.io/gh/multiformats/js-sha3)
[![CI](https://img.shields.io/github/actions/workflow/status/multiformats/js-sha3/js-test-and-release.yml?branch=master\&style=flat-square)](https://github.com/multiformats/js-sha3/actions/workflows/js-test-and-release.yml?query=branch%3Amaster)

> Multiformats hash functions for SHA3

# About

<!--

!IMPORTANT!

Everything in this README between "# About" and "# Install" is automatically
generated and will be overwritten the next time the doc generator is run.

To make changes to this section, please update the @packageDocumentation section
of src/index.js or src/index.ts

To experiment with formatting, please run "npm run docs" from the root of this
repo and examine the changes made.

-->

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

# Install

```console
$ npm i @multiformats/sha3
```

## Browser `<script>` tag

Loading this module through a script tag will make its exports available as `MultiformatsSha3` in the global namespace.

```html
<script src="https://unpkg.com/@multiformats/sha3/dist/index.min.js"></script>
```

# API Docs

- <https://multiformats.github.io/js-sha3>

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](https://github.com/multiformats/js-sha3/LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](https://github.com/multiformats/js-sha3/LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
