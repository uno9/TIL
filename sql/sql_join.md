# SQL join
作成日時:2021/3/6

## 0.サンプルデータ

商品モデル
|id|name|price|
|-|-|-|
|1|ポッキー|100|
|2|プリッツ|98|
|3|トッポ|110|

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

## 1.SQL join
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