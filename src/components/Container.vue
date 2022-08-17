<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page
    class="q-mr-auto q-ml-auto p-mt-sm"
    style="max-width: 700px; margin-top: 20px"
  >
    <slot></slot>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
