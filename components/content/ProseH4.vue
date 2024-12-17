<template>
  <h4 :id="id"><slot /></h4>
</template>

<script setup>
defineProps(['id'])
</script>