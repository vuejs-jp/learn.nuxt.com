<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'

const name = ref('John Doe')

function updateName(value: string) {
  name.value = value
}
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <p>Hi, {{ name }} 👋</p>
    <ChildComponent
      message="Hello from Parent!"
      :name="name"
      @update:name="updateName"
    />
  </div>
</template>
