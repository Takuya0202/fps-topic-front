# fps-topic-front
## installation
以下を実行してね
```bash
make up
make in
npm i
```
`make in`失敗したら`docker compose run front bash`を使用すること

## ディレクトリ構成
以下のようにコンポーネントを定義してください

```
src/
├── app/
│   ├── components/
│   │   ├── elements/      # 汎用コンポーネント
│   │   │   ├── buttons/
│   │   │   │   └── game-icon.tsx
│   │   │   ├── inputs/
│   │   │   ├── cards/
│   │   │   └── ...
│   │   │
│   │   └── features/      # 機能・ページ固有コンポーネント(ルーティング名と同じ名前にする)
│   │       ├── home/
│   │       ├── game-detail/
│   │       └── ...
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
└── package.json
```

### `components/elements/`
プロジェクト全体で再利用可能な汎用コンポーネントを配置します。
- ボタン、インプット、カードなど
- 特定のビジネスロジックに依存しない
- 例: `buttons/game-icon.tsx`

### `components/features/`
特定のページや機能でのみ使用する限定的なコンポーネントを配置します。
- 特定のページ専用のUI
- ビジネスロジックと密結合

## ブランチ,開発方法
機能の開発をする際にはブランチ名を以下のようにしてください<br>
`feature/user-index-page`など、これはユーザー側の一覧ページを表しています。<br>
機能が完成したら`dev`ブランチにPRを出してください。PRする前に`npm run format`を実行してね<br>

