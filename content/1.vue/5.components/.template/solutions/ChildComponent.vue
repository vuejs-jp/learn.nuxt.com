<script setup lang="ts">
defineProps<{
  message: string
}>()

const name = defineModel<string>()
</script>

<template>
  <div class="child-component">
    <h2>Child Component</h2>
    <p>{{ message }}</p>
    <input
      v-model="name"
      type="text"
    >
  </div>
</template>

<style scoped>
.child-component {
  border: solid red;
  padding: 1rem;
}
</style>
