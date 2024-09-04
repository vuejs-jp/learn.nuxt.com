---
ogImage: true
---

# コンポーネント

Vue.js のコンポーネントは、UI を小さな再利用可能な部分に分割するための基本的な単位です。\
特に Single File Components (SFC) を使うことで、HTML、CSS、および JavaScript を 1 つの `.vue` ファイルにまとめることができます。

## 基本的な SFC の構造

SFC は基本的に以下のような `<script>`, `<template>`, `<style>` の 3 つのセクションで構成されます。

```vue
<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello, Vue!')

function sendMessage() {
  console.log(message.value)
}
</script>

<template>
  <p>{{ message }}</p>
  <button type="button" @click="sendMessage">
    Click me
  </button>
</template>

<style scoped>
p {
  color: red;
}
</style>
```

この例では、`<script>`, `<template>`, `<style>` の 3 つのセクションが使われています。

- `<script setup>`: コンポーネントのロジック部分を定義します。`<script setup>` を使用することで、Composition API を簡潔に書くことができます。
- `<template>`: コンポーネントのビュー部分を定義します。
- `<style scoped>`: コンポーネント固有のスタイルを定義します。`scoped` 属性を追加することで、このコンポーネントのスタイルが他のコンポーネントに影響を与えないようにします。

## コンポーネントの再利用

`.vue` ファイルで定義した SFC は、以下のように `<script setup>` でインポートすることでテンプレート内で再利用することができます。

```vue
<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
</script>

<template>
  <ChildComponent />
</template>
```

## コンポーネント間のデータの受け渡し

Vue コンポーネント間でデータをやり取りする基本的な方法として、`props` と `emit` を使用します。

- `props`: 親コンポーネントから子コンポーネントにデータを渡すための方法です。
- `emit`: 子コンポーネントから親コンポーネントにイベントを発火するための方法です。

それぞれ `defineProps`, `defineEmits` で登録します。\
使い方は右側のプレイグラウンド、または [API ドキュメント](https://ja.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)から確認できます。

## 双方向バインディング

コンポーネント上で `v-model` を使うことで双方向バインディングを実装できます。\
以下の例では、コンポーネント中で宣言された `value` が `<input>` の値とバインドされ、`<input>` の入力値が `value` に反映されます。

```vue
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <input v-model="value" type="text">
</template>
```

また、SFC で `defineModel` を使うことで、親コンポーネントから `v-model` 経由で使用できる双方向バインディングの `props` を宣言できます。

```vue
<!-- Child.vue -->
<script setup lang="ts">
const localValue = defineModel<string>()
</script>

<template>
  <input v-model="localValue" type="text">
</template>
```

```vue
<!-- Parent.vue -->
<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'

const parentValue = ref('Initial Value')
</script>

<template>
  <ChildComponent v-model="parentValue" />
</template>
```

## チャレンジ

プレイグラウンドの `ChildComponent.vue` は `props` と `emit` を使って双方向バインディングを実現しています。\
これを `defineModel` を使って簡潔に書き直してみましょう。

もし手詰まりになったら、解決策を確認するためのボタンをクリックして、ヒントを得ることができます。

:ButtonShowSolution{.bg-faded.px4.py2.rounded.border.border-base.hover:bg-active.hover:text-primary.hover:border-primary:50}
