# AWS Lambda
作成日時:2021/9/23

## 1.Lambdaとは？
> サーバーやクラスターについて検討することなくコードを実行できます。
* 参考:
  * [lambda 公式](https://aws.amazon.com/jp/lambda/)

## 2.適した環境
* アプリケーションシナリオに最適
* ユーザーの責任は、コードのみ
  * アプリの実行に関わる部分はAWSの責任
  * メモリのバランス、CPU、ネットワーク、その他のリソースを提供するコンピューティングフリートを管理してくれる
* 実質サーバーレス
  * 実質＝ユーザーが管理するサーバーが無いだけで、アプリケーションを実行する為にサーバーは使用している
* 使用出来る言語
```
Node.js
Python
Ruby
Go
Java
PowerShell
C#
```

* サーバーレスの利点とデメリット
  * ユーザーがインフラの管理（OS・インフラのパッチ管理）が不要
  * 大量のリクエストを常に捌く時は、EC2のほうが安いときも！
  * Lambdaならではの開発スタイルが求められるため、初心者は関係を理解するのが難しい場合もある
* 関数単位の作成と実行
  * 大きなアプリケーションを作成するよりは、機能単位の開発、小規模開発というスポット的な使用が多いかも？

## 3. ドキュメント
- https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/welcome.html
- https://www.sbbit.jp/article/cont1/67741

## 関連
- サーバーレスとは？
  - [サーバーレスアプリケーション](../cloud/serverless_application.md)
  - [サーバーレスアプリケーションのセキュリティ](./colud/../../cloud/serverless_application_seculity.md)