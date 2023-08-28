import sha3 from 'js-sha3'
import { from } from 'multiformats/hashes/hasher'

/**
 * @param {sha3.Hash} fn
 * @returns {(inp:Uint8Array)=>Uint8Array}
 */
function encoder (fn) {
  return (/** @type {Uint8Array} */ b) => new Uint8Array(fn.array(b))
}

export const sha3224 = from({ code: 0x17, name: 'sha3-224', encode: encoder(sha3.sha3_224) })
export const sha3256 = from({ code: 0x16, name: 'sha3-256', encode: encoder(sha3.sha3_256) })
export const sha3384 = from({ code: 0x15, name: 'sha3-384', encode: encoder(sha3.sha3_384) })
export const sha3512 = from({ code: 0x14, name: 'sha3-512', encode: encoder(sha3.sha3_512) })
export const shake128 = from({ code: 0x18, name: 'shake-128', encode: (b) => new Uint8Array(sha3.shake128.array(b, 256)) })
export const shake256 = from({ code: 0x19, name: 'shake-256', encode: (b) => new Uint8Array(sha3.shake256.array(b, 512)) })
export const keccak224 = from({ code: 0x1a, name: 'keccak-224', encode: encoder(sha3.keccak224) })
export const keccak256 = from({ code: 0x1b, name: 'keccak-256', encode: encoder(sha3.keccak256) })
export const keccak384 = from({ code: 0x1c, name: 'keccak-384', encode: encoder(sha3.keccak384) })
export const keccak512 = from({ code: 0x1d, name: 'keccak-512', encode: encoder(sha3.keccak512) })
