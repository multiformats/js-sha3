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
