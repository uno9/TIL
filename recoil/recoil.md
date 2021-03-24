# recoil
作成日時:2021/3/24

## 1.recoilとは
* facebookにより提供されている状態管理ツール
* stateをglobalに一括管理し、stateの値を使いたいcomponentで宣言する
  * state更新時にcomponentのre-renderが走る
  * [react hooks](https://ja.reactjs.org/docs/hooks-overview.html)を使用し、
  個別でhooksを作成した状態管理を行う場合にも使いやすい
* atom・selectorを使用してアプリケーションデータを管理する
  * atomは一位のキーとそれが管理するデータの一部が含まれる
  * selectorは複数のatomに基づく派生状態の一部
  * イメージ図：https://ics.media/entry/210224/images/20210224_recoil_dataflow__960.png
* 

## 2.関連キーワード
* [クリーンアーキテクチャ](https://qiita.com/kz_12/items/bc79102247b86626fc72)

## 3.参考サイト
* [図解クリーンアーキテクチャ](https://qiita.com/kz_12/items/bc79102247b86626fc72)
* [React Recoil事始め](https://qiita.com/taka4sato/items/e5302ed71c58249ab24a)
* [Reactの新しい状態管理ライブラリ「Recoil」とは？ Reduxとの違いを解説](https://ics.media/entry/210224/)