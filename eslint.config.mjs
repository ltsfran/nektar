import { FlatCompat } from '@eslint/eslintrc'
import love from 'eslint-config-love'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }),
  {
    ...love,
    files: ['*.js', '*.jsx', '*.ts', '*.tsx']
  }
]

export default eslintConfig
