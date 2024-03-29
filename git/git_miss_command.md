# git miss command
作成日時:2021/2/19

## 1.push先を間違えたけど、変更を残したまま、戻したい
```
git log
git reset --soft <commit id>
```

## 2.commitを間違えた！もどしたい！
* `git log -1`
  * logの内、最新の1件を表示する
* 変更したデータを**残した**まま**直前**のcommitを戻したい！
  * `git reset --soft HEAD^`
* http://www-creators.com/archives/1116#1_git_commit

## 3.stashを間違えて削除した…戻したい…
* 削除するstashを間違えたときに、過去の変更データを捜索して戻す
  * stashなどのデータを読み込み
   `git fsck --no-reflog | awk '/dangling commit/ {print $3}' > dangling_commit`
  * 変更歴などを表示
    * グラフver
      `git log --graph --oneline --decorate --all $(cat dangling_commit)`
    * 列挙ver
      `git log --oneline $(cat dangling_commit) | grep 'WIP on'`
  * メッセージなどを手掛かりに目当てのstashデータを探す
  * 見つけたら、下記のコマンドで中身を確認
    * `git show <ハッシュ>`
  * データを発見したらハッシュをコピーして下記のコマンドにペースト
    * `git stash apply <ハッシュ>`
  * いらないファイルは削除
    * `rm dangling_commit`

* 実行すると、**×stashが生成される**のではなく**変更として復活**する
* 変更を選択して新たなstashを生成することで、元に戻せる
* https://zenn.dev/snowcait/articles/7ba0720db50aea28c652


## 4.ブランチ名を変更
**ブランチ名の確認**
* 自分が切ったローカルにあるブランチ一覧
  * `git branch`
* 他の人が切ったリモート含め、全ブランチ
  * `git branch -a`

**名前変更**
* チーム開発で他の人が切ったリモート含め、全ブランチ名の変更
* `git branch -m 変更前のブランチ名　変更後のブランチ名`
* リモートの変更前ブランチを削除
　　* `git push origin :変更前ブランチ名`
* 変更したローカルのブランチをpushする
  * `git push origin 変更したブランチ名`

参考にしたサイト： https://qiita.com/ramuneru/items/0590cf2136df59614a26
