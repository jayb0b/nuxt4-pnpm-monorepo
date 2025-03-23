<template>
  <div>
    <h1>Hello!!</h1>
    <test-component :company="company" />
  </div>
</template>
<script setup lang="ts">
import type { Company } from '@esimonorepo/shared-types'

const company = {
  id: 1,
  name: 'Test',
  website: 'http://www.test.com',
} as Company;
</script>
