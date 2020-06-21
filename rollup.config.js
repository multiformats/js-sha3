import globby from 'globby'
import path from 'path'

let configs = [{
  input: 'index.js',
  output: {
    file: 'dist/index.cjs',
    format: 'cjs'
  }
}]

const relativeToMain = name => ({
  name: 'relative-to-main',
  renderChunk: source => {
    while (source.includes("require('../index.js')")) {
      source = source.replace("require('../index.js')", `require('${name}')`)
    }
    return source
  }
})

const plugins = [relativeToMain('@multiformats/sha3')]
const add = (pattern) => {
  configs = configs.concat(globby.sync(pattern).map(inputFile => ({
    input: inputFile,
    output: {
      plugins,
      file: path.join('dist', inputFile).replace('.js', '.cjs'),
      format: 'cjs'
    }
  })))
}
add('test/*.js')
console.log(configs)

export default configs
