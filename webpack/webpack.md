# WebPackとはなにか？
作成日時:2021/2/6

## 1.目的
* WebPack、よく聞くけど何をしてるのかはちゃんと理解していない
  * 何の為にあるのか？
  * 類似物は何か？
  * どんなときに使うのか？
  * どうやってつかうのか？

## 2.WebPackの概要
Qiita記事によると…
>Node.jsでサーバーサイドで動かすモジュールバンドラーツールになります。
<br />
<br />
Node.jsでモジュールという単語を聞くと、「npmやbowerとかと何が違うの？」みたいな印象を持たれる方もいるかもしれませんが、基本的にはそれらとはまた違った役割をもっています。
<br />
npmやbowerはJSライブラリのバージョン管理などの目的としてよく利用されますが、WebpackはJSファイルのコーディングの部分で開発者の手助けをしてくれるのです。

別の記事によると…
>webpackは、モジュールを束ねるツールです。<br />
<br />
モジュールとは、プログラム内のJavaScriptファイル（以下：jsファイル）やsassファイルなどのことです。webpackを使うことで、複数のjsファイルをひとつのjsファイルにまとめたり、複数のsassファイルをひとつのsassファイルにしたりできます。
<br />
バンドル（bundle）は”束にする”という意味です。上の画像に「bundle  your style」とありますが、文字どおりwebpackはモジュールを”束にする”役割を担います。

井関さんいわく…
> webブラウザ特化のJavascriptをサーバーサイドでも利用できるようにした結果、あらゆる場面でモジュールの読み込み・依存等を管理できるツールが必要になった。
<br />
つまり、本質はモジュールバンドラー

👉結論、WebPackとは
<br />
ユーザーがjavascriptのあらゆるモジュールやパーツを使用しても依存、読み込み順をよしなにまとめて、HTMLで読み込めば動くような静的ファイルを自動生成してくれる。
<br />
これにより、フロント～バック間などの多方でjavascriptが使用されていても、あらゆる関係を気にすることなく開発できるようになる。

## 3.WebPackの採用目的
* node/react/angularなどのフレームワーク実行
* javascriptのコンパイル
* css/sassのコンパイル
<br />
など👉
<br />
javascriptのモジュールが沢山あるような、フレームワークなどを実行をする際に、読み込み順や依存を考えなくても良いため採用される

## 4.WebPackの役割
◆類似ツール
![image](https://user-images.githubusercontent.com/47252405/107117498-001e6900-68be-11eb-9bc4-c2378b2e3c05.png)
出典：Qiita記事 https://qiita.com/kamykn/items/45fb4690ace32216ca25
<br />

◆WebPackの登場
![image](https://user-images.githubusercontent.com/47252405/107117534-2e03ad80-68be-11eb-8b9a-3b197ade295e.png)
出典：Qiita記事 https://qiita.com/kamykn/items/45fb4690ace32216ca25
<br />

◆WebPack単体の図解
![image](https://user-images.githubusercontent.com/47252405/107117328-019b6180-68bd-11eb-98bf-f64f97f66e35.png)
出典：井関さん https://www.slideshare.net/ssuser46977e/webpack-why-cant-you-understand-the-webpack
<br />

## 参考資料
* [フロント弱者によるwebpack挑戦](https://ky-yk-d.hatenablog.com/entry/2018/06/09/191849)
* 👀おすすめ！[Qiita記事](https://qiita.com/kamykn/items/45fb4690ace32216ca25)
* 👀おすすめ！[井関さんの解説](https://www.slideshare.net/ssuser46977e/webpack-why-cant-you-understand-the-webpack)
* [さくらの解説](https://knowledge.sakura.ad.jp/21623/)
