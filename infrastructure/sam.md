# SAM
作成日：2022/05/20

AWS サーバーレスアプリケーションモデル (SAM、Serverless Application Model) 
- サーバーレスアプリケーション構築用のオープンソースフレームワーク
https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/what-is-sam.html


## テンプレート仕様
- テンプレートに関数、API、アクセス権限、イベントなどの設定を行う
テンプレートはyaml・json形式で記述できる
https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html


## AWSリソースとの関連
- LambdaでRDSの操作をすることや、イベントブリッジを使用した特定日時に自動で起動することもできる
