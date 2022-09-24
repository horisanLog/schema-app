# OpenAPIを定義し、型を自動生成できる環境を構築

## swagger-merger
複数のswaggerファイルを1つのswaggerファイルに統合してくれる
今回はcomponents(レスポンス情報), paths(api定義)でファイルを分割している.
（リクエストパラメーターを分割する場合、paramsとかのファルダーを作ると良いと思います）

https://github.com/WindomZ/swagger-merger

## ReDoc
OpenAPI定義からAPIドキュメントを生成する

UIがswagger-uiに比べて見やすくなる

https://github.com/Redocly/redoc

## openapi-generator typscript
OpenAPI定義ファイルを元にリクエスト・レスポンスの型やapi処理を自動生成する

https://openapi-generator.tech/docs/installation/

## gulp
watch機能でswaggerのsrc直下のファイルの更新後に自動でswagger.ymlを最新に更新してくれるように設定した

https://ics.media/entry/3290/
https://gulpjs.com/docs/en/api/watch/

## マニュアル

### server start
```sh
$ docker-compose build
$ docker-compose up

http://localhost:8000 // frontend
http://localhost:3000 // backend
http://localhost:8081 // Redocで生成した静的ファイル
http://localhost:8002 // swagger-uiで生成した静的ファイル

```

### DB
```sh
$ docker-compose run --rm backend rails db:create
$ docker-compose run --rm backend rails db:migrate

```


### setting up openapi-generator

docker上で設定するとjavaをインストールしたり、セットアップが大変なため、ローカルで生成している（フロントと一緒のnodeのverなら問題ない）

```sh
※ node v16.6.1

$ npm install @openapitools/openapi-generator-cli -g

$ openapi-generator-cli version-manager set 5.3.0

$ cd frontend

※ 初めて実行する人
openApis直下のファイルが自動生成するか確かめるために、openApis直下(openApis/publicApi/index.tsは残す)は削除して以下を実行してください

$ npm run api:generate
→ openApisののファイルが生成されれば、成功

```
