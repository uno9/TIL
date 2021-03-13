# SQL join
作成日時:2021/3/6

## 0.サンプルデータ

商品モデル
|id|name|price|
|-|-|-|
|1|ポッキー|100|
|2|プリッツ|98|
|3|トッポ|110|
|4|板チョコ|90|

顧客モデル
|id|name|buy_item|
|-|-|-|
|1|a子|3|
|2|b太|1|
|3|c助|2|
|4|c助|2|

割引モデル
|id|name|discount|item_number|
|-|-|-|-|
|1|ポッキー|0.2|1|
|2|プリッツ|0.1|2|
|3|トッポ|0.2|3|
## 1.SQL inner join 内部結合
join   
欲しいデータが複数のテーブルにまたがっている時、テーブルを結合してデータを検索する。   
その際、表を結合するために使用するのが`join`。   
結合には、**内部結合**と**外部結合**の2つがある。   
   
内部結合   
それぞれのテーブルの指定したカラムの値が一致するものだけ結合する。   
   
外部結合   
内部結合のようにそれぞれのテーブルの指定したカラムの値が一致するものを結合するのに加え、どちらかのテーブルにしか存在しないものに関しても取得できる。   
   
参考サイト：https://zenn.dev/naoki_mochizuki/articles/60603b2cdc273cd51c59

---
**join例**

- 親モデル：商品モデル
- 子モデル：顧客モデル
  - 商品のidとbuy_itemを関連づける

```
select *(表示したカラム：＊全部)
from items
join users
on itens.id = users.buy_item;

```
**Active Record**

```
<!-- models > item.rb -->
def items_data
  joins(:users)
end
```
**結果：関連したキーをもとに２つの表が合体する**
|name|price|name|buy_item|
|-||-|-|-|
|ポッキー|100|b太|1|
|プリッツ|98|c助|2|
|トッポ|110|a子|3|
|プリッツ|98|c助|2|


- 重複するデータは省く
```
select distinct *
from items
join users
on items.id = users.buy_item;

```
**Active Record**

```
<!-- models > item.rb -->
def items_data
  joins(:users).
  distinct
end
```

**結果：重複していたデータが削除される**
|name|price|name|buy_item|
|-||-|-|-|
|ポッキー|100|b太|1|
|プリッツ|98|c助|2|
|トッポ|110|a子|3|
## 2.３つ以上の表をつなげる
- 親モデル：商品モデル
- 子モデル：顧客モデル
  - 商品のidとbuy_itemを関連づける
- 子モデル：割引モデル
  - 商品idとitem_numberを関連づける

```
select items.name, items.price, users.name, users.buy_item, discounts.discount
from items
join users
on items.id = users.buy_item
join discounts
on items.id = discounts.item_number
```

**Active Record**

```
<!-- models > item.rb -->
def items_data
  joins(:users).
  joins(:discounts)
end
```
**結果：指定されたカラムのデータが表になり、割引の欄が追加**
|name|price|name|buy_item|discount|
|-||-|-|-|
|ポッキー|100|b太|1|0.2|
|プリッツ|98|c助|2|0.1|
|トッポ|110|a子|3|0.2|
|プリッツ|98|c助|2|0.1|

## 3.SQL left join 外部結合

left join（左外部結合）   
結合したい表を左側に結合する。   
内部結合では、キーとマッチしないレコードは非表示となるが、外部結合では表示される。   
左外部結合では、左の行は強制的に全て表示し、右テーブルには全ての値がNULLである行を生成して結合を実行する。   
   
right join（右外部結合）   
左外部結合の右版。   
右外部結合では、右の行は強制的に全て表示し、左テーブルには全ての値がNULLである行を生成して結合を実行する。   
   
参考サイト：https://qiita.com/ngron/items/db4947fb0551f21321c0#%E5%86%85%E9%83%A8%E7%B5%90%E5%90%88%E3%81%A8%E5%A4%96%E9%83%A8%E7%B5%90%E5%90%88

---
**left join例**

- 親モデル：商品モデル
- 子モデル：顧客モデル
  - 商品のidとbuy_itemを関連づける

```
select *(表示したカラム：＊全部)
from items
left join users
on itens.id = users.buy_item;

```
**Active Record**

```
<!-- models > item.rb -->
def items_data
  left_joins(:users)
end
```
**結果：板チョコを購入した人がいないのでNULLと表示される**
|name|price|name|buy_item|
|-||-|-|-|
|ポッキー|100|b太|1|
|プリッツ|98|c助|2|
|トッポ|110|a子|3|
|プリッツ|98|c助|2|
|板チョコ|90|NULL|NULL|