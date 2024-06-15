---
ogImage: true
---

# Reactivity Part 2

前章で `ref` と `computed` を使った基本的なデータバインディングを学びました。本章では、`reactive` と `watch` について学びましょう。この章で基本的なリアクティビティシステムをマスターできます！

- [`reactive()`](https://ja.vuejs.org/api/reactivity-core#reactive) はオブジェクト全体をリアクティブなデータとして扱うことができます。複数のプロパティを持つオブジェクトを管理できます。

- [`watch()`](https://ja.vuejs.org/api/reactivity-core#watch) はリアクティブなデータの変化を監視し、変化があったときに特定の処理を実行することができます。

`reactive` で宣言された値は、JavaScript の[プロキシ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)として返ってくるため、以下のように通常のオブジェクトと同じように操作することができます。

```ts
const counter = reactive({ count: 0 })
counter.count++ // .value は不要
console.log(counter.count) // -> 1
```

::note
**注意**: よくある間違いとして、`ref` はプリミティブな値のみに対応し、オブジェクトには `reactive` を使うという誤解があります。実際は `ref` でも `ref({ count: 0 })` のようにオブジェクトをリアクティブな値として宣言することができます。
また、`reactive` には[いくつかの制限事項がある](https://ja.vuejs.org/guide/essentials/reactivity-fundamentals#limitations-of-reactive)ため、リアクティブな状態を宣言する際は基本的に `ref` を用いるのが推奨されます。
::

`watch` は `computed` と同様にリアクティブ値の変化に応じて作用しますが、主に `console.log` や `fetch` のような副作用をリアクティブに実行するときに使います。
プレイグラウンドでは、サーバーで管理している TODO アイテムを表示していますが、表示する ID が変化したときに新しいアイテムを取得するために `watch` による監視をしています。

`watch` に関する詳しい説明は[ウォッチャーガイド](https://ja.vuejs.org/guide/essentials/watchers)を参照してください。

## チャレンジ問題

今のプレイグラウンドは、TODO アイテムに関するデータを `todoId` と `todoData` の二つのリアクティブ値として管理しています。これらを一つの `todoData` にまとめましょう。
これらのステップを実行することで、`reactive` と `watch` の理解を深めることができるのでぜひ挑戦してみてください！

1. `todoData` に `id` プロパティを追加し、`todoId` を消しましょう。
2. エラー箇所にしたがって、`todoId` と書いてある箇所を `todoData.id` に変えましょう。
   - これで `watch` 以外のエラーは解消されるはずです。
3. `watch` の第一引数をゲッター関数に変えましょう。
   - `todoData.id` のままだと数値を渡していることになるため、`watch` が変化を補足できません。

もし手詰まりになったら、解決策を確認するためのボタンをクリックして、ヒントを得ることができます。
:ButtonShowSolution{.bg-faded.px4.py2.rounded.border.border-base.hover:bg-active.hover:text-primary.hover:border-primary:50}

ここまでで Vue のリアクティビティシステムの基礎について学びました。次のステップで、Vue の強力な機能の一つである「Composition API」について学びましょう！
