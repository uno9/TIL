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

