# indexテーブルのみかた
作成日時:2021/11/17

## 1.index関連コマンド
```
# 1. indexをはる
CREATE TABLE db_name.tbl_name
  (col_name data_type, ..., INDEX [index_name] (col_name, ...))

# 例：CREATE TABLE db_name.tbl_name
  (col_name data_type, ..., INDEX [index_name] (col_name, ...))


# 2. indexを確認する
show columns from [確認したいテーブル名];
show index from [確認したいテーブル名]¥G

# 3. 複数のカラムを組み合わせた複合インデックを作成する
CREATE TABLE db_name.tbl_name
  (col_name1 data_type, col_name2 data_type, ...,
   INDEX [index_name] (col_name1, col_name２, ...))

# 例：create table staff(joiny int, id int, name varchar(10), index joiny_id_index (joiny, id));

```

- 参考：https://www.dbonline.jp/mysql/table/index10.html
## 2.学び
* xxxxをxxxとする。
→
* xxxxをxxxとする。
→
