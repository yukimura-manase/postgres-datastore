# Datastore Repository Doc

## Overview (概要)

- DB の migration 管理について

- `tbls` を使った、DB ドキュメントの自動生成について

## 環境設定

### .env.example を.env に反映

1. 以下のコマンドを実行

```bash
cp .env.example .env
```

2. .env の各値を適切なものに置換

## migration 管理について

すべて、`db`ディレクトリにて実行するので、移動します。

```bash
cd db
```

### migration ファイルの生成

次のコマンドを実行で、Migration ファイル(`.ts`ファイル)が作成されます。

```bash
yarn migrate:make
```

### migration ファイルの名前を Rename する

- Migration ファイルは、次のように「作成日時\_migration.ts」というファイル名で作成されます。

- どんな Action をする Migration ファイルなのかわかるような最適なファイル名をつけましょう。

### migration の 最新反映 と up/down

- 未実行のマイグレーションファイルの up メソッドを、タイムスタンプの古い順に全ファイル実行する。

- 基本的には、新しい Migration ファイルを作成後に、次のコマンドを実行して、Migration を全ファイル実行する。

```bash
yarn migrate:latest
```

- タイムスタンプが最も古い未実行のマイグレーションファイルの Up メソッドを実行する。

```bash
yarn migrate:up
```

- 指定したマイグレーションファイルの Up メソッドを実行する。

```bash
yarn migrate:up マイグレーション・ファイル名
```

- タイムスタンプが最も新しい実行済のマイグレーションファイルの down メソッドを実行する。

```bash
yarn migrate:down
```

- 指定したマイグレーションファイルの down メソッドを実行する。

```bash
yarn migrate:down マイグレーション・ファイル名
```

## DB ドキュメントの自動生成について

- 前提：ドキュメントの生成は migration 実行の後に、必ず行ってください。

  - Doc と最新版の DB・Table 構造 を合わせるため。

1. ローカル DB を起動する

- すべて、Container を起動する

```bash
docker compose up --build
```

- または、DB Container だけを起動する

```bash
docker compose up db
```

2. 対象の migration をすべて適用する
3. 以下のコマンドを実行し、ドキュメントを更新する

```bash
docker compose run db_doc_gen
```

## local DB に接続して Test する場合

- db Container の起動確認

```bash
docker container ps
CONTAINER ID   IMAGE                                                       COMMAND                  CREATED        STATUS        PORTS                                            NAMES
e53611b248c1   db-db                                                       "docker-entrypoint.s…"   4 days ago     Up 4 days     0.0.0.0:5432->5432/tcp                           db-db-1
```

- 次のコマンドで、DB コンテナの中にはいる

  - `db-db-1`は、コンテナ名

```bash
docker container exec -it db-db-1 /bin/bash
```

- PostgreSQL に入る

```bash
psql -h localhost -p 5435 -U postgres password
```

- Table の一覧を確認する

```bash
testdb=# \dt
```

- 新規で作成した Table の構造を確認する

  - \d テーブル名

## Dev, Stg, Prod 各環境に対する Migration について

- `.env`ファイルの DB 接続情報のコメントを解除して、各 DB 環境に対して、追加の Migration を走らせる。

- 例えば、新しく新規 Table を追加して、Migration を走らせる場合などは、新規で作った Migration ファイルだけを実行する。

```bash
yarn migrate:up マイグレーション・ファイル名
```

## [ 参考・引用 Doc ]

1. [Knex.js Migrations](https://knexjs.org/guide/migrations.html#migration-cli)

2. [Knex あれこれ(雑多メモ)](https://qiita.com/kkk_xiv/items/cee4bcae0e24b8778889)
