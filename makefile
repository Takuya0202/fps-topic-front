# コンテナを起動
up:
	docker compose up -d

# コンテナを停止
down:
	docker compose down

# ビルド
build:
	docker compose build

# ビルドして再起動
rebuild:
	docker compose down
	docker compose build
	docker compose up -d

# ログを表示
logs:
	docker compose logs -f

# コンテナ中入る
in:
	docker compose exec front bash