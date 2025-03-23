<template>
  <div>
    <div>
      Hello From The Base Layer. The background color is from shared styles, the
      text color is from the local styles.
    </div>
    <code>{{ props.company }}</code>
  </div>
</template>
<script setup lang="ts">
import type { Company } from "@esimonorepo/shared-types";

const props = defineProps<{
  company: Company;
}>();
</script>
