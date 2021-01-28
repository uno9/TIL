# DooD
作成日時:2021/1/28

## 1.DooD
* Docker outside of Docker（DooD）
* ホストのDockerデーモンのソケットファイルをvolume接続(マウント)して、そことやりとりするようにする
* イメージ図：   
https://user-images.githubusercontent.com/19891114/56958913-b51ee000-6b86-11e9-91e0-7a0b6f6cb3b1.jpeg

➡ **Dockerコンテナの中から、Dockerをさわる**

## 2.Ubuntuにdockerを入れる
* インストール方法（2021/1/28の時点）
https://qiita.com/tkyonezu/items/0f6da57eb2d823d2611d
* インストール方法は2つ
1リポジトリからのインストール   
2スクリプトのインストール   
➡今回は、1リポジトリを選択、きちんとバージョンチェックが出来たことを確認
* 基本rootユーザー実行になりそうなため、ログインは必要ないかも？
  

## 3. DooDの設定
* 設定方法
https://qiita.com/minamijoyo/items/c937fb4f646dc1ff064a
  * 2.でdockerをインストールしたのは、dockerコマンドを使用したいため

## 参考文献一覧
* [DooDについて](https://esakat.github.io/esakat-blog/posts/docker-in-docker/)
* [Ubuntuにdocker](https://qiita.com/tkyonezu/items/0f6da57eb2d823d2611d#3-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%81%A7%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
* [DooDの設定](https://qiita.com/minamijoyo/items/c937fb4f646dc1ff064a)