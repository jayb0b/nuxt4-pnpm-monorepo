import { createConfigForNuxt } from '@nuxt/eslint-config';

export default createConfigForNuxt({
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
  },
});
