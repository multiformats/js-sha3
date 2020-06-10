'use strict'

const sha3 = require('js-sha3')
const encoder = fn => b => new Uint8Array(fn.array(b))

module.exports = [
  { code: 0x14, name: 'sha3-512', encode: encoder(sha3.sha3_512) },
  { code: 0x15, name: 'sha3-384', encode: encoder(sha3.sha3_384) },
  { code: 0x16, name: 'sha3-256', encode: encoder(sha3.sha3_256) },
  { code: 0x17, name: 'sha3-224', encode: encoder(sha3.sha3_224) },
  { code: 0x18, name: 'shake-128', encode: encoder(sha3.shake128) },
  { code: 0x19, name: 'shake-256', encode: encoder(sha3.shake256) },
  { code: 0x1a, name: 'keccak-224', encode: encoder(sha3.keccak224) },
  { code: 0x1b, name: 'keccak-256', encode: encoder(sha3.keccak256) },
  { code: 0x1c, name: 'keccak-384', encode: encoder(sha3.keccak384) },
  { code: 0x1d, name: 'keccak-512', encode: encoder(sha3.keccak512) }
]
