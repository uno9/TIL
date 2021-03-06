# テスト駆動開発
作成日時:2021/5/25

## 1.テスト駆動開発（TDD）とは？
- ソフトウェアの開発手法の1つ
 - テスト技法ではない
 - テストファーストな考え方
  - プロダクションコードを書く前に、テストコードを書く

- 期待されること
  - 実装で予期せぬ不具合が発生する可能性を事前に解消するための設計
   - 実装コードをよりわかりやすいコード・良い書き方に修正したい場合は、**テストが通っているとき**に行うことで、実装の予期せぬ動作不良を解消
   - 事前に作らないといけない部分（ゴール）が明確になっていれば、開発するコードをシンプルにできる
    - **テストが落ちたら**、解消するコードを実装する
  - TDDのゴール｜`動作するから綺麗なコードを書く` 
   - とりあえず動きそうなコードを**テスト**として実装する
   - テストが通る書き方がわかったら、**より良いコードにするため**にコードを整形する
    - 綺麗なコードがゴールとなるため、結果的に開発後の運用保守コストを下げることができる 

TDD＝ `仮実装`

![image](https://user-images.githubusercontent.com/47252405/120073021-8b23a900-c0d1-11eb-83c8-e7d6a373835e.png)


## 2.テスト駆動開発の進め方
1. 開発したい処理をtodoとして書き出す
2. todoから1つのタスクを選び、テストコードを書く
3. テストを実行し、失敗する（Red）
4. 実装のコードを書く
5. テストが通るまでリファクタリングを行う
6. テストを実行し、成功させる（Green）
7. 動いたコードをリファクタする
    - リファクト例｜
      - 最短でテストが成功する処理の書き方へ変更する
      - 重複を排除する
8. 次のtodoに着手し、2~7を実行する

![image](https://user-images.githubusercontent.com/47252405/120072980-5c0d3780-c0d1-11eb-86b8-a0631c3b173a.png)


## 3.テスト駆動開発の事例

事例については、下記の参考サイトに詳しい流れがあるため、紹介↓
[テスト駆動開発（TDD）とは何か。_todoリストを作成する](https://panda-program.com/posts/test-driven-development/#todo%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B)



参考：
- [テスト駆動開発って何だろう](https://dev.classmethod.jp/articles/what-tdd/)
- [新人がテスト駆動開発について学んでみた。](https://www.techscore.com/blog/2018/12/16/drivendevelopment/)
- [テスト駆動開発（TDD）とは何か。コードで実践方法を解説します](https://panda-program.com/posts/test-driven-development)
