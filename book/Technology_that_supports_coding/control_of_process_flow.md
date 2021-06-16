# 処理の流れをコントロール
作成日時:2021/6/11

## 1.for/which文が存在する理由
コードを見やすく、書きやすくするため

## 2.for/which文があるときないとき
* for/whichが無い場合は、別の処理にジャンプする必要がある
* 複数のジャンプ先が存在するため、ぱっと見でコードを理解するのは難しい
* コードが点在するため、流れを追いにくい


* for/which文が存在する場合は、条件に応じてどんな処理をするのか文内に記述されている
* コードの流れを追いやすい
* コード全体を見た時に、for/which文があるところは繰り返しの処理をしていると認識しやすい

※コードを書いて比較をすると、一目瞭然かも