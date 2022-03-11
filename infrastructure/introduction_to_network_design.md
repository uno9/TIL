# ネットワーク設計入門
作成日時:2022/03/11

## 1.AWSリソースが稼働している場所
* Amazon Virtual Private Cloudの場合
  * 16のリージョン
  * 42のアベイラビリティゾーンで構成
    * VPCは、アベイラビリティゾーン内で稼働

## 2.ネットワークでの分類
* プライベートIPアドレス空間で稼働するリソース
  * EC2
  * RDS
  * EMRなど
* パブリックIPアドレス空間で稼働するリソース
  * S3
  * Lambda
  * DynamoDB
  * CloudWatchなど

## 3.プライベートサブネットの設計
1. VPCの作成
2. サブネットの作成
3. VPCコンポーネントの配置とルーティング設定
4. インスタンスの配置
5. 名前解決の検討

### VPCの作成
- 使用するCIDRブロックを決める
  - /28~/16
  - > レンジはRFC1918を推奨
    - VPCのレンジを設定するときに、参考になりそうな[記事](https://dev.classmethod.jp/articles/amazon-vpc-5-tips/)

## 参考にした記事
- [AWS のネットワーク設計入門](https://d1.awsstatic.com/events/jp/2017/summit/slide/D2T3-5.pdf)