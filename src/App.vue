<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { setDefaultData } from './shared/TodoMethods';

export default defineComponent({
  name: 'App',
  mounted() {
    setDefaultData();
  },
});
</script>
