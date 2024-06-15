<script setup lang="ts">
const todoId = ref(1)

const todoData = reactive({
  loading: false,
  data: null,
})

function increment() {
  todoId.value++
}

async function fetchTodo() {
  todoData.loading = true
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    todoData.data = await res.json()
  }
  finally {
    todoData.loading = false
  }
}

watch(todoId, fetchTodo)

fetchTodo()
</script>

<template>
  <div>
    <p>ID: {{ todoId }}</p>
    <button type="button" @click="increment">
      次の TODO アイテムを取得
    </button>
    <p v-if="todoData.loading">
      Loading...
    </p>
    <pre v-else>{{ todoData.data }}</pre>
  </div>
</template>
