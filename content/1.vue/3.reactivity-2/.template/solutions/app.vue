<script setup lang="ts">
const todoData = reactive({
  id: 1,
  loading: false,
  data: null,
})

function increment() {
  todoData.id++
}

async function fetchTodo() {
  todoData.loading = true
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoData.id}`)
    todoData.data = await res.json()
  }
  finally {
    todoData.loading = false
  }
}

watch(() => todoData.id, fetchTodo)

fetchTodo()
</script>

<template>
  <div>
    <p>ID: {{ todoData.id }}</p>
    <button type="button" :disabled="todoData.loading" @click="increment">
      Next Todo
    </button>
    <p v-if="todoData.loading">
      Loading...
    </p>
    <pre v-else>{{ todoData.data }}</pre>
  </div>
</template>
