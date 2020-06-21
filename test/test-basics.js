/* globals describe, it */
import main from '../index.js'
import assert from 'assert'

import { create } from 'multiformats'

const test = it
const same = assert.deepStrictEqual

const { multihash, bytes } = create()
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
