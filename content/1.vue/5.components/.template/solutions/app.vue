<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'

const name = ref('John Doe')
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <p>Hi, {{ name }} 👋</p>
    <ChildComponent
      v-model="name"
      message="Hello from Parent!"
    />
  </div>
</template>
