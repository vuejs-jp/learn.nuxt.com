# Composables とは何か ?

[Composables](https://ja.vuejs.org/guide/reusability/composables.html)とは、VueのComposition APIを活用して再利用可能な状態やロジックを定義するための機能です。Options APIで主流な[mixins](https://ja.vuejs.org/api/options-composition.html#mixins)と類似したコンセプトですが、より柔軟で再利用性の高い機能を提供します。Composition APIの詳しい説明は[こちら](https://ja.vuejs.org/guide/extras/composition-api-faq.html)をご参照ください。

Composablesの主な特徴は以下の通りです。

- **再利用可能なロジック**: Composablesを使用すると、コンポーネント間で共有したいロジックや状態をモジュールとして定義し、それを簡単にインポートして使用できます。
- **関数として定義**: Composablesは通常、関数として定義され、必要な状態やメソッドを返します。この関数はVueのComposition APIを使用して内部で状態管理や副作用を処理します。
- **明示的な依存関係**: Composablesを使うことで、依存関係が明示的になり、どのロジックや状態がどのコンポーネントで使用されているかが明確になります。

Nuxtでは、`composables/`ディレクトリにComposablesなロジックを格納することが多く、[自動インポート](https://nuxt.com/docs/examples/features/auto-imports)の対象になります。

## チャレンジ問題

それでは、これらの特徴を踏まえて以下のステップでロジックをComposablesとして切り出し、再利用してみましょう。

1. 既存のvueファイル（`app.vue`）の確認してください。
2. カウンターロジックをComposableとして切り出してください。具体的には`composables/`フォルダを作成し、その中に`useCounter.ts`というファイルを作成してください。
3. `app.vue` に2で切り出したロジックを適用してください。

## ヒント

- Composableは関数として定義され、必要な状態やメソッドを返します。
- `composables/`ディレクトリに作成したロジックは自動インポートが適用されます。
