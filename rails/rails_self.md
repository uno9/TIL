# self
作成日時:2021/3/9

## 1.クラスメソッドをつくるself
* メソッドの頭に`self.`をつけるとクラスメソッドとなる
```
class User < ActiveRecord::Base
  def account       #インスタンスメソッド
  end

  def self.account_count  #クラスメソッド (def User.hoge とやっても同じ意味)
  end
end
```
* クラスメソッドは、定義したクラス内で使用することができるメソッド
* インスタンスメソッドは、定義されたクラスのインスタンスを使用して個別の情報を扱うなどの処理を行えるメソッド

イメージ参考：https://wa3.i-3-i.info/word1118.html



## 2.メソッド内でのself
* xxxxをxxxとする。
→
* xxxxをxxxとする。
→

## 参考サイト
- http://rails.hatenadiary.jp/entry/2013/02/15/125047
- https://qiita.com/suzuki-koya/items/1553c405beeb73f83bbc
- https://teratail.com/questions/202474