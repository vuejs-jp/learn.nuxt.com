---
ogImage: true
---

# ミドルウェア

Nuxt では、特定のルートにナビゲートする前にコードを実行する為のミドルウェアを提供しています。\
この機能は例えば、認証状態によってページへのアクセスを制限する場合などに便利です。

ミドルウェアにはグローバルミドルウェアとページ単位のミドルウェアの2つの種類があります。
どちらも、`middleware` ディレクトリに実装します。

## グローバルミドルウェア

グローバルミドルウェアは以下のように定義することができます。

```
middleware/
  --| hello.global.ts
```

```ts
// middleware/hello.global.ts
export default defineNuxtRouteMiddleware(() => {
  console.log('hello')
})
```

## ページ単位のミドルウェア

ページ単位のミドルウェアは以下のように定義することができます。

```
middleware/
  --| helloA.ts
```

```ts
// middleware/hello.ts
export default defineNuxtRouteMiddleware(() => {
  console.log('helloA')
})
```

```vue
<!-- pages/a.vue -->
<script setup lang="ts">
definePageMeta({
  middleware: ['hello'],
})
</script>

<template>
  <h1>Hello A</h1>
</template>
```

このプレイグランドの例では、
