
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  plugins: [
    replace({
      NODE_ENV: process.env.NODE_ENV
    }),
    resolve()
  ]
}
