# Cloud Formation

## Cloud Formationとは？
- さまざまなcloud上に存在するサービスと連携をして操作をすること
	- イメージ：AWSのS3とlambdaを連携して、データの操作をサーバーレスで行うなど
- サービスの連携を行うときの設定に[IaC]()を使用している
	- テンプレートにどんなサービスをどんな設定で使用するのか記述する
	- IaC対応形式： yaml, json


## Cloud Formationを体験するには？
- [CloudFormation超入門](https://dev.classmethod.jp/articles/chonyumon-cloudformation/)
- [【AWS】CloudFormationで、定番のネットワーク構成を作成してみた](https://zenn.dev/anaka/articles/627d0a112d57ed)
- [AWS SAMを使う前にCloudFormationテンプレートを書こう](https://qiita.com/izanari/items/78258251cced2f713b33)
	- Cloud FormationとSAM
		- SAMはCloud Formationを拡張したもの
		- 基礎の部分は同じで、できることが増えているだけ
		- SAMはAWSが提供しているサービスであるため、AWSサービスとの親和性が高い

## 参考
- [【AWS】CloudFormationまとめ](https://zenn.dev/soshimiyamoto/articles/3c624728438902)
