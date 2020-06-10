/* globals describe, it */
const main = require('./')
const test = it
const assert = require('assert')
const same = assert.deepStrictEqual

const multiformats = require('multiformats')
const { bytes } = multiformats
const { multihash } = multiformats()
multihash.add(main)

const fixture = bytes.fromString('testFixture')

for (const { name, code } of main) {
  describe(name, () => {
    test('encode', async () => {
      const hashed = await multihash.hash(fixture, name)
      await multihash.validate(hashed, fixture)
      const duplicate = await multihash.hash(fixture, code)
      same(hashed, duplicate)
    })
  })
}
