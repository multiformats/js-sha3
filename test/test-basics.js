/* eslint-env mocha */

import * as sha3 from '@multiformats/sha3'
import chai from 'chai'
import { bytes } from 'multiformats'
import table from './table.csv.js'

const { assert } = chai

const fixtures = [
  ['sha3-512', 'beep boop', '1440fae2c9eb19906057f8bf507f0e73ee02bb669d58c3069e7718b89ca4d314cf4fd6f1679019cc46d185c7af34f6c05a307b070e74e9ed5b9c64f86aacc2b90d10'],
  ['sha3-384', 'beep boop', '153075a9cff1bcfbe8a7025aa225dd558fb002769d4bf3b67d2aaf180459172208bea989804aefccf060b583e629e5f41e8d'],
  ['sha3-256', 'beep boop', '1620828705da60284b39de02e3599d1f39e6c1df001f5dbf63c9ec2d2c91a95a427f'],
  ['sha3-224', 'beep boop', '171c0da73a89549018df311c0a63250e008f7be357f93ba4e582aaea32b8'],
  // these two fixtures inherited from https://github.com/multiformats/js-multihashing-async/blob/master/test/fixtures/encodes.js
  // are not correct, they have the wrong output length, the next two are from go-multihash
  // ['shake-128', 'beep boop', '18105fe422311f770743c2e0d86bcca09211'],
  // ['shake-256', 'beep boop', '192059feb5565e4f924baef74708649fed376d63948a862322ed763ecf093b63b38b'],
  ['shake-128', 'foo', '1820f84e95cb5fbd2038863ab27d3cdeac295ad2d4ab96ad1f4b070c0bf36078ef08'],
  ['shake-256', 'foo', '19401af97f7818a28edfdfce5ec66dbdc7e871813816d7d585fe1f12475ded5b6502b7723b74e2ee36f2651a10a8eaca72aa9148c3c761aaceac8f6d6cc64381ed39'],
  ['keccak-224', 'beep boop', '1a1c2bd72cde2f75e523512999eb7639f17b699efe29bec342f5a0270896'],
  ['keccak-256', 'beep boop', '1b20ee6f6b4ce5d754c01203cb3b99294b88615df5999e20d6fe509204fa254a0f97'],
  ['keccak-384', 'beep boop', '1c300e2fcca40e861fc425a2503a65f4a4befab7be7f193e57654ca3713e85262b035e54d5ade93f9632b810ab88b04f7d84'],
  ['keccak-512', 'beep boop', '1d40e161c54798f78eba3404ac5e7e12d27555b7b810e7fd0db3f25ffa0c785c438331b0fbb6156215f69edf403c642e5280f4521da9bd767296ec81f05100852e78']
]

describe('Digests', () => {
  for (const [name, input, expectedDigest] of fixtures) {
    it(name, async () => {
      const hasher = sha3[name.replace('-', '')]
      const hash = await hasher.digest(bytes.fromString(input))
      assert.strictEqual(hash.code, hasher.code)
      assert.strictEqual(bytes.toHex(hash.bytes), expectedDigest)
    })
  }
})

describe('Hashers', () => {
  const beepboop = bytes.fromString('beep boop')

  const codecs = table.split('\n')
    .filter(Boolean)
    .map((l) => l.split(',').map((e) => e.trim()).map((e) => e.startsWith('0x') ? parseInt(e, 16) : e))

  for (const [name,, code] of codecs) {
    const exportName = name.replace('-', '')

    it(name, async () => {
      const hasher = sha3[exportName]
      assert.strictEqual(hasher.code, code)
      const hash = await hasher.digest(beepboop)
      assert.strictEqual(hash.code, hasher.code)
    })
  }
})
