import { cp, mkdir, rename, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { build } from 'vite'

const projectRoot = resolve(import.meta.dirname, '..')
const outputDirectory = resolve(projectRoot, 'dist')

await build({
  root: projectRoot,
  build: {
    outDir: outputDirectory,
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(projectRoot, 'source.html'),
    },
  },
})

await rename(resolve(outputDirectory, 'source.html'), resolve(outputDirectory, 'index.html'))
await rm(resolve(projectRoot, 'assets'), { recursive: true, force: true })
await mkdir(resolve(projectRoot, 'assets'), { recursive: true })
await cp(resolve(outputDirectory, 'assets'), resolve(projectRoot, 'assets'), { recursive: true })
await cp(resolve(outputDirectory, 'index.html'), resolve(projectRoot, 'index.html'))
