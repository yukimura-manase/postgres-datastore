# PostgreSQL DataStore Template

- PostgreSQL ✖️ Knex ✖️ tbls の Sample DataStore

- Migration や、DB 操作などの情報は、`datastore/README.md`の方をご確認ください。

## DB の環境変数について

- 接続先は、 環境ごとの .env を作成して、環境変数で指定するようにしてください。

- .env, .env.dev, .env.stg, .env.prod のように、環境ごとに作成する

## 参考・引用

### Knex について

1. [Knex.js Migrations](https://knexjs.org/guide/migrations.html#migration-cli)

2. [Knex あれこれ(雑多メモ)](https://qiita.com/kkk_xiv/items/cee4bcae0e24b8778889)

### tbls (DB Doc Generator)について

1. [tbls を使えば，ER 図を git で管理しやす](https://zenn.dev/yumemi_inc/articles/6caf17872b6521)

2. [tbls でデータベースドキュメントを生成する（1.ドキュメント生成編）](https://qiita.com/k1LoW/items/2010413a8547b1e6645e)

3. [k1low/tbls](https://hub.docker.com/r/k1low/tbls)
