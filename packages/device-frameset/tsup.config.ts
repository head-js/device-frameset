import { defineConfig } from 'tsup'
import * as sass from 'sass'

const sassPlugin = {
  name: 'sass',
  setup(build) {
    build.onLoad({ filter: /\.scss$/ }, (args) => {
      const result = sass.compile(args.path, { style: 'compressed' })
      const css = result.css.replace(/`/g, '\\`').replace(/\\/g, '\\\\')
      const js = `if(typeof document!=='undefined'){var s=document.createElement('style');s.textContent=\`${css}\`;document.head.appendChild(s)}`
      return { contents: js, loader: 'js' }
    })
  }
}

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  esbuildPlugins: [sassPlugin],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
})
