# SQL join
作成日時:2021/3/6

## 1.SQL join
- 親モデル：A
- 子モデル：B
  - AとBのモデルを繋げる

```
select 表示したいカラム
from A model
join B model
on As.主キーとなるカラム = Bs.関連するカラム;

```
**Active Record**

```
<!-- models > A.rb -->
def AtoB
  joins(:B)
end
```

- 重複するデータは省く
```
select distinct 表示したいカラム
from A model
join B model
on As.主キーとなるカラム = Bs.関連するカラム;

```
**Active Record**

```
<!-- models > A.rb -->
def AtoB
  joins(:B).
  distinct
end
```
## 2.３つ以上の表をつなげる
- 親モデル：A
- 子モデル：B
  - AとBのモデルを繋げる
- 子モデル：C
  - BとCのモデルを繋げる

```
select 表示したいカラム
from A model
join B model
on As.主キーとなるカラム = Bs.関連するカラム
join C model
on Bs.主キーとなるカラム = Cs.関連するカラム;

```