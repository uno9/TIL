## rails/rubu install
作成日時:2021/1/28

### 1.環境
* Ubuntu
  * 👆docker上に立てた物
* 本体OSはWindows


### 2.インストール手順
* 最初の基本インストールは下記参照
  * docker_for_windows/docker_first_app.md

* ruby/node/railsのインストールを行う（2021/1/28時点の内容）
  * https://qiita.com/kaishuu0123/items/2a91495e7daa8c7783ed#_reference-676d3ce878ece19a21dc

#### 3. rubyコンテナを立てた場合のインストール
* railsのインストール
```
gem install rails --no-document

rails -v
```

* [windows用セットアップ 2. Railsのインストール](https://railsgirls.jp/install#setup_for_linux)