# 無関係の下位問題を抽出する
作成日時:2021/5/7

## 1.無関係の下位問題とは？
関数やコードブロックの中に、**作成したい動きとは異なるコード**が存在していること

例：サーバーからapiのデータを取得する
```
ajax_post({
  url: 'localhost:3000',
  data: data,
  on_success: function ( response_data ) {
    // 表示データの整形
  }
})
```

* 「表示データを整形」
  * 本質的な作成したい動きではない
  → 本質的な動きを実行した**後**に必要な動き


## 2.無関係の下位問題の解消法
* 無関係野下位問題を見つけて抽出する
  1. 根本的に実現したい動きは何か？自問する
  2. 無関係だと考えられる動きは、実現したい動きに直接的に効果あるのか？
  3. 無関係の下位問題に該当するコードが**相当量あれば**、抽出して別関数として切り出す
  ※抽出するといっても、やりすぎはNG

## 3.抽出する効果
* プログラムの核だけが残り、運用保守が行いやすい
  * 巨大な式だと、何がどこで影響しているのか読み取りにくい
  * それぞれ核だけが残っているため、編集ポイントが分かりやすい
* 無関係の下位が**汎用プログラムとして再利用**できる
  * 汎用プログラムにならない場合でも、抽出する効果アリ👆


**👀プログラムを小さなコードで構成することが、読みやすいコードに繋がる**