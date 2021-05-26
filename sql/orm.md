# ORM
作成日時:2021/5/26

## 1.ORMとは
- ORM
  - **SQLをクラスで操作できる**ようにしたもの（ActiveRecordなど）
    - RailsコンソールでSQL文を書かずともDB操作ができるのは、この技術を使用しているから。
  - RDBに対するデータ操作をオブジェクト指向型言語で扱えるようにする手法
    - カプセル化されたORM用のライブラリがSQLの生成を背後で行っている
      - DBテーブルはクラスを紐付けされている
        - オブジェクトに対する操作をすることで、データ操作を行う 
  ### ORM と Rails migraion
  migrationをDBに適用させるときにORM（Active Record）が活躍しているらしい。
  > #マッピングのための命名規則
  > 
  > クラスとテーブルの対応には、名前に関する規約が利用される。
  > 
  > （例）テーブル名が books の場合、クラス名は Book規約通りにクラスを作成すれば、中身が空でも正しくマッピングされる。
  > 規約を外れる命令が必要な場合は、クラスに記述を追加すれば良い。
  > クラスの属性とカラムのマッピングも、設定を書かなくて良い。
  > ActiveRecordライブラリがDBのスキーマを実行時に読み取る。
  > 
  > カラム名と同じ名前の属性を使えるように、カラムのデータ型に従って属性が適切なRubyのクラスへ対応付けられる。
  > 
  > 具体的な仕組みはlib/active_record下のソースを読むと良い（らしい）。
  抜粋：[マッピングのための命名規則-Active Record](https://qiita.com/yk-nakamura/items/acd071f16cda844579b9#%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87)

## 2.RDBとオブジェクト指向言語の違い
  ### RDBの表現
  RDBのテーブル例
  ![](./img/20210525_orm_rdb_example.png)
  ### オブジェクト指向言語の表現
  - インスタンスがプロパティやメソッドを持つ
  Class Person 🤝 RDB
    ↓
    Object Person
  クラス例
  ![](./img/20210525_orm_object_class_example.png)

## 3.ORMを使用しない場合は？
SQLでデータ操作！
しかし、SQLは
- どこで何がエラーを出してうまく動かないのかわかりづらい
- SQL文が長くなり、複雑化しやすい
  `開発しにくくなる面も出てくる！！`


## 参考：
- [【PythonのORM】SQLAlchemyで基本的なSQLクエリまとめ](https://qiita.com/tomo0/items/a762b1bc0f192a55eae8)
- [オブジェクト関係マッピング](https://qiita.com/yk-nakamura/items/acd071f16cda844579b9)
- [もっとORMを使えるようになりたいので、見直してみた](https://qiita.com/niisan-tokyo/items/156eb35c6eeaf07b9b65)
- [ORMとは？](https://zenn.dev/myuki/books/02fe236c7bc377/viewer/d2422a)