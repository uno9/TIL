# サーバーレスアプリケーションの重大なリスク
作成日時:2021/10/6

## 1.サーバーレスアプリケーションとは？
(以前まとめた記事を参照すること！)[cloud\serverless_application.md]

## 2.重大なリスク一覧

- SAS-1: Function Event-Data Injection
- SAS-2: Broken Authentication
- SAS-3: 安全でないサーバーレスデプロイコンフィギュレーション
- SAS-4: 過剰な権限を持つファンクションのアクセス許可とロール
- SAS-5: 不適切な機能の監視とロギング
- SAS-6: 安全でないサードパーティとの依存関係
- SAS-7: Insecure Application Secrets Storage
- SAS-8: Denial of Service & Financial Resource Exhaustion
- SAS-9: Serverless Function Execution Flow Manipulation
- SAS-10: 不適切な例外処理と詳細なエラーメッセージ
- SAS-11: レガシー、または利用されていないサーバーレスファンクション、リソース、イベントトリガー
- SAS-12: CROSS-EXECUTION DATA PERSISTENCY

* 参考：[サーバーレスアプリケーションの最も危険なリスク12選](https://qiita.com/yuuhu04/items/ad38d6d35d358a90a60f)

## 3.重大なリスクの内容
#### SAS-1: Function Event-Data Injection
* これまで
  * アプリケーションインジェクションは、ユーザーから直接入力にのみ注意を払っていた
* サーバーレスアプリケーション
  * ユーザーの直接入力以外にもイベントのトリガーが生まれたため、多数のイベントソースからの入力に注意しなければならない
  * 例：
    * クラウドストレージイベント
    * SQLデータベースイベント
    * HTTP API呼び出し
    * SMS メッセージ通知、プッシュ通知、メールなど
  * サーバーレスで最も一般的なインジェクションの欠陥
    * Operating System (OS) command injection
    * Function runtime code injection (e.g. Node.js/JavaScript, Python, Java, C#, Golang)
    * SQL injection
    * NoSQL injection
    * Pub/Sub Message Data Tampering (e.g. MQTT data Injection)
    * Object deserialization attacks
    * XML External Entity (XXE)
    * Server-Side Request Forgery (SSRF)
* 対策
  * ユーザーが直接入力しないとはいえ、イベントソースから受け取るデータがすべて正しいものとは限らないため、チェックは必要
  * コードの権限が常に最小であること
    * 権限が大きいことで、他のソースにタッチされる可能性
  * イベントタイプとシステムのエントリポイントを全て洗い出す
  * HTTP/HTTPS トラフィックを検査する