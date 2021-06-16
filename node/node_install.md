# node install
作成日時:2021/2/24

## 1.nodeをubuntuにインストールする
```
sudo apt install -y nodejs npm

node -v
```

## 2.macにnode/npmをインストールする
- homebrewのインストール

![image](https://user-images.githubusercontent.com/47252405/122161872-7a36ae00-cead-11eb-8ce1-efd29fd12077.png)
  
  - ターミナルで下記コマンドを実行
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
  - インストールができたか確認する
    `brew -v`
- nodebrewのインストール
  `brew install nodebrew`
  -  インストールができたか確認
    `nodebrew -v`
  - nodeのインストール
    ```
      // 最新版
      nodebrew install-binary latest
      // バージョン指定
      nodebrew ls-remote
      nodebrew install-binary {version}
      // 安定版
      nodebrew install-binary stable
    ```
    - インストールエラーが出たときは[ここ](https://fukatsu.tech/install-nodejs)参照
  - 使用するバージョンの指定
    `nodebrew use stable`
  -  パスを通す
    - ~/.bash_profileを確認する　（なければ、作成する）
      `echo 'export PATH=$PATH:$HOME/.nodebrew/current/bin' >> ~/.bash_profile`
    - ~/.bash_profileに下記を追記
      ```
        if [ -f ~/.bashrc ] ; then
        . ~/.bashrc
        fi
      ```
    - ターミナルを再起動 or 下記のコマンドを実行して、永続適用
      ` source ~/.bash_profile`
    - node/npmのインストールを確認する
      ```
        node -v
        npm -v
      ```


## 参考サイト
- [Ubuntuに最新のNode.jsを難なくインストールする](https://qiita.com/seibe/items/36cef7df85fe2cefa3ea)
- [Homebrewのインストール](https://qiita.com/zaburo/items/29fe23c1ceb6056109fd)
- [Macでnode.jsをインストール、npmコマンドも使用可にする【2021.1月最新版】](https://qiita.com/non0311/items/664cf74d9ff4bad9cf46)
- [nodebrewでNode.jsをインストールする。](https://qiita.com/yukibe/items/bae442fa6314bd8f9d7a)
- [【Mac】HomebrewでNode.jsとnpmをインストールする](https://fukatsu.tech/install-nodejs)
