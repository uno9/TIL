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
## 2.show indexをしたときのテーブル

- Table
  - テーブル名です。
- Non_unique
  - 重複許可を表します。重複可能:1, 重複不可:0
- Key_name
  - インデックスの名前。このインデックスが主キーなら、常に PRIMARY です。
- Seq_in_index
  - インデックス内のカラムシーケンス番号であり、1から始まります。
- Column_name
  - カラム名です。
- Collation
  - インデックス内カラムのソート方法。Aなら昇順, NULLならソートされないのどちらかです。
- Cardinality
  - インデックス内のユニーク数の推定値。統計値なため必ずしも正確ではない。この値が高いほど結合時にこのインデックス利用可能性が高くなります。
- Sub_part
  - カラムが部分的インデックス設定されてるときの文字の数。カラム全体がインデックス設定されている場合は NULLが入ります。
- Packed
  - キーがパックされる方法を示します。パックされない場合は NULL。
- Null
  - このカラムにNULLを含められるならYES、含められないなら空白が入ります。
- Index_type
  - 使用されるインデックス方法 (BTREE、FULLTEXT、HASH、RTREEのいずれかです)。
- Comment
  - 各カラムで説明されていないこのインデックスに関する情報
- Index_comment
  - このインデックスが作成されたときに COMMENT 属性で設定された任意のコメント。

```
mysql> show index from tokens;
+--------+------------+-------------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table  | Non_unique | Key_name                | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
+--------+------------+-------------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| tokens |          0 | PRIMARY                 |            1 | id          | A         |           1 |     NULL | NULL   |      | BTREE      |         |               |
| tokens |          0 | index_tokens_on_value   |            1 | value       | A         |           1 |     NULL | NULL   | YES  | BTREE      |         |               |
| tokens |          1 | index_tokens_on_user_id |            1 | user_id     | A         |           1 |     NULL | NULL   | YES  | BTREE      |         |               |
+--------+------------+-------------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
3 rows in set (0.00 sec)
```
出典サイト：https://blog.mothule.com/db/mysql/db-mysql-show-index

**関連情報**
SQLチューニング