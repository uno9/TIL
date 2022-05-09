## RDS
作成日: 2022/04/15


## RDSとは
- リレーショナルデータベース
  - 関連のあるデータ項目の集合体
    - プライマリーキーにより、各オブジェクトは関連している
  - 参考記事: https://aws.amazon.com/jp/relational-database/

- Amazon Relational Database Service 
  - AWSが提供しているリレーショナルデータベースのサービス

現在サポートしているエンジンは、

```
MySQL
MariaDB
Oracle
SQL Server
PostgreSQL
Amazon Aurora
```

下記を指定して作成する

```
データベースエンジン、バージョン
DBインスタンス識別子
マスターユーザー名、パスワード
DBインスタンスクラス（マシンスペック）
ストレージ設定
マルチAZ配置
ネットワーク設定（配置するAmazon VPCなど）
```

### RDBMS
- RDAMSとは

参考記事: 
- https://business.ntt-east.co.jp/content/cloudsolution/column-23.html#section-01-01
