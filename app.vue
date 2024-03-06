<template>
  <div>
    <NuxtWelcome />
    <pre v-if="!pending">
      {{ data }}
    </pre>
  </div>
</template>

<script setup lang="ts">

const { data, pending } = await useFetch('/api/version', { key: 'version' });

</script>
