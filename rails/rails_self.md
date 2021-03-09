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
  * Userのデータを扱ってレコードを検索する
* インスタンスメソッドは、定義されたクラスのインスタンスを使用して個別の情報を扱うなどの処理を行えるメソッド
  * Userのデータの中から、年齢をupdateする

**言葉のイメージ**
* クラス：動物
* インスタンス：アメショ
* オブジェクト：猫
イメージ参考：https://wa3.i-3-i.info/word1118.html



## 2.メソッド内でのself
* クラスメソッド内でselfを使うとクラスを指す
* インスタンスメソッド内で使用されたselfは、そのインスタンスになる

* contoller側で取得した@の中のデータを受け取ることもできる
  * classメソッドを呼びにいっているので、classメソッドが取得したparamsを操作できるという流れ
```
class User < ActiveRecord::Base
  def hoge       #インスタンスメソッド
  end

  def self.hoge  #クラスメソッド
  end

  def page       #インスタンスメソッド
    self.hoge        #インスタンスメソッドのhogeが呼ばれる
    hoge             #インスタンスメソッドのhogeが呼ばれる
    self.class.hoge  #こうするとクラスメソッドのhogeを呼べる
  end

  def self.page  #クラスメソッド
    self.hoge        #クラスメソッドのhogeが呼ばれる
    hoge             #クラスメソッドのhogeが呼ばれる
  end
end
```

↓のような書き方もできる
クラスメソッドとインスタンスメソッドが入り乱れる場合は、下記のように書くと区別がつきやすいかもしれない
```
class User < ActiveRecord::Base
  def hoge        #インスタンスメソッド
  end

  def page        #インスタンスメソッド
  end

  class << self
    def page      #クラスメソッド
    end

    def hoge      #クラスメソッド
    end
  end
end
```
## 3.controllerの@を受け取るself

```
<!-- controller -->
class Api::V1::UsersController < ApplicationController
  def update
    @user = NoCheck.find(params[:user_id])
    @user.update(edit_name)
  end
end

```
インスタンスメソッド内で、selfを使用することでアクセスする
```
<!-- model -->
class User < ApplicationRecord
belongs_to :number
  def update
    self.create_reverted_no_check!(
      number_id: self.number.id #関連モデルへアクセス
      user_id: self.id, #クラスメソッドへアクセス
      user_name: edit_name, #paramsを引数として使用
      user_number: self.number.user_number #関連モデルへアクセス
    )
  end
end
```

## 参考サイト
- http://rails.hatenadiary.jp/entry/2013/02/15/125047
- https://qiita.com/suzuki-koya/items/1553c405beeb73f83bbc
- https://teratail.com/questions/202474