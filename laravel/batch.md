# laravelでバッチを作る
作成日時:2021/6/29

## 1.バッチを作る上で注目すること
* コマンドクラス
  * インターフェース
  * 実行するときに最初に触れるところ
* サービスクラス
  * 処理を行うところ
  * コントローラみたいな雰囲気
  * レポジトリクラスから取得したデータを使用
* レポジトリクラス
  * DBから情報を取得する
  * モデルみたいな雰囲気

## 2.バッチ処理作成の参考
**ディレクトリの構造**
* [Laravelのディレクトリ構造について学ぶ](https://qiita.com/shosho/items/93cbff79376c41c3a30b)
* [Laravel で Service 層を取り入れるときに検討したいこと](https://qiita.com/nunulk/items/6b7a7bbda17192f6b2f5)

**作成系統**
* [[Laravel]フレームワークのインストールして、バッチでDB処理を行うまでの流れ](https://akamist.com/blog/archives/1010)
* [PHPフレームワーク『Laravel』入門 #6 Artisanオリジナルコマンドの作成と定期実行方法](https://knowledge.cpi.ad.jp/howto-cpi/laravel-command/)
* [【Laravel】artisanコマンドを作ってみよう！](https://tektektech.com/laravel-artisan-make-command/)
