# 型
作成日時:2021/7/21

## 1.型とは
* コンピュータの中にある情報は、0/1・on/off（ビット）のみ
* ビット列だけでデータの細かい情報まで再現することは難しい
  * 例：数字の２とテキストの２では人間にとって表現したいものがことなる
* 「型」＝数値の種類の解釈を明確にするために追加された情報


## 2.数値をオンとオフで表現する方法
* 整数や少数を美っと列で再現するには？
  * コンピュータが理解できるon/off、0/1のあつまりで表現する

* 数を表現する歴史

* 整数
  * 位取りで表現する

    ![](2021-07-24-21-45-08.png)   
    出典：[十進位取り記数法](https://www.shinko-keirin.co.jp/keirinkan/sansu/WebHelp/01/page1_21.html)

    * 一の位
    * 十の位
    * 百の位…
      * １つの位で0~9までの数字を表現できる
      * 数値が大きくなれば、必要な位の数も増えていく
        * 3桁の数字をランプで表現する時、一の位・十の位・百の位に９個ずつ計27個のランプがあれば表現できる
        * 999個→27個
        * もっと少ないランプ数で表現することはできないか？

  * 7セグメントディスプレイ
    * 位に表現する数字を7個のランプで表現したもの
    * コンピュータの誕生前に発明されている
      * 使用例：電卓

    ![](2021-07-24-21-48-58.png)   
    出典：[7セグメントコードの反転（Ruby）](https://obelisk.hatenablog.com/entry/2017/12/29/061237)

        * 7個のランプで1桁の数字が表現できるため、3桁の数字は21個のランプで表現できる
          * 27個→21個
          * もっと少ないランプ数で表現することはできないか？

  * そろばん
    * 0~4の数字を4つの玉で表現
    * 5を１つの玉で表現
      * 計5つの球で1つの位を表現することができる
      
    ![](2021-07-25-23-37-40.png)   
    出典：[そろばんの数字の読み方](https://dokugaku.org/soroban/howToRead.php)

      * 3桁の数字を表現するときは15個の玉で表現することができる
        * 21個→15個

  * 進数とは？
    > 「数字という概念をどのように表現するか」   
    [図解で明快！ 16進数、10進数、2進数の概念・計算方法について分かりやすく教えます！](https://my-terrace.com/engineer1/)

    例）100を変換する
    | 進数 | 数字 |
    | --- | --- |
    | 10進数 | 「100」 |
    | 2進数 | 「1100100」 |
    | 16進数 | 「64」 |

  * 2進数の概念
    * 1つのランプではon/offの2通りでしか表現ができない
      * 数字を2通りの状態で表現しよう！

    ![](2021-07-25-23-55-34.png)   
    出典：[2進数の基礎](https://www.pc-master.jp/words/2sinsu.html)

      * 1個のランプで2通り、10個のランプで1023通りの数字を表現することができる
      * パソコンに搭載されているランプの量によって何万通りもの数字を表現できる

  * 8進数と10進数と16進数の概念
    * 10進数：日常生活で数えるために使用する数字
      * 1の位を表現する場合は、0~9通りの符号であらわす
    * 2進数：0~1の2通りの符号で1の位を表現する
      * 01だけで表現する2進数は、数字が大きくなればなるほど、01の量が増えて、読みにくくなる…
        * 何個か単位で数字をまとめて表現する数字の量を減らそうとしたのが、8進数や16進数

* 実数   
  0.1など、小数点を含む数字のこと
  * 固定小数点数
    * 小数点をつける位置を固定する
      * 例：下2桁を少数部とする
        * 1 → 0.01
        * 10 → 0.10
        * 100 → 1
      * 問題点
        * 決められた少数部の桁より小さい数字を表現することができない
        * どの位置から少数部と設定したか覚えて置かなければならない

    ![](2021-07-27-23-52-32.png)   
    出典：[固定小数点数とは](https://medium-company.com/%E5%9B%BA%E5%AE%9A%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0/)

      * どうすれば問題を解決できるか？
        * 少数部の設定をコンピューターにお願いする

  * 浮動小数点数
    * コンピュータが少数部の情報を管理する
    * 数字のどこからを少数部として設定したいという情報を付与しておく
      * 参考：[浮動小数点数をわかりやすく](https://wa3.i-3-i.info/word14959.html)
    * 固定小数点数と浮動小数点数のちがい
      * 固定小数点数は、少数部をあらかじめ固定しておく
      * 浮動小数点数は、小数点の位置が動く（浮動）する
        * 小数点の位置が右にずれた＝1/10の数字になった
        * 小数点の位置が右にずれた＝1/10の数字になった
          * 例：（左にずれる）1 ← 0.1 → 0.01(右にずれる)
    
    ![](2021-07-28-00-02-33.png)   
      出典：[固定小数点数と浮動小数点数の違いを調べよう！](https://itmanabi.com/fixed-floating/)

  * 浮動小数点をあらわすためのしくみ
    * 整数・少数点以下でわける
    * ビットに変換する
    * 2つの数字をくっつける
    ![](2021-07-29-23-55-29.png)   
    * 参考： [ビットで表す数字の世界～浮動小数点編～](https://www.macnica.co.jp/business/semiconductor/articles/intel/133327/)

* 小数点を表示するときの問題点
  * 3/10
    * （10進数）= 0.3
    * （2進数） = 0.010011001100110011001100110011001100110011...
      * 2進数では0.3は割り切れない
        * 0.3を10回足して切り捨てると2になる
        * 人は10進数で表現するので、期待した通りにコンピュータが動かない可能性がある

* なぜ型が存在するのか？
  * 人間からすると、3 ≠ 3.0
  * コンピュータからみると、3 ≒ 3.0
    * コンピュータの数字表現方法の問題から数字の認識がことなる
    * ビット列だけを見ると、整数なのか浮動小数点か判別がつきにくい
      * 人間が認識してほしい情報を誤解なくコンピュータが認識するために型が存在

* 型の種類といろいろな展開
  * 静的型付け
    * ユーザー定義型
      * 処理に必要なデータの型をユーザーが定義する
    * 型定義の仕様化
      * 型は、はじめから定義されているもの
        * 型の構造やクラス構成などの情報は最低限公開される
        * 型の情報が最低限パッケージ化されたため、型が合っているかコンパイル時にチェックできる機能が誕生
          * 例：typescript
        * 型の情報を公開することで外部と通信を行う時に、データの情報を管理しやすくなる
    * インターフェースの発展
      * データタイプ以外の情報も型に付与させる言語も登場
        * 返り値の有無、例外の情報など
    * 柔軟な型
      * 型がいろんな情報を持つようになったことで、型の一部仕様を変更して再利用したいという要望がうまれる
        * 型を引数にとって型を作る関数
        * 総称型の誕生
  * 動的型付け
    * 変数を宣言するときに、変数の型を宣言しない
    * 予め変数の型を宣言していないため、いろんな型のデータを代入することができる
    * 参考：[動的型付けと静的型付け](https://qiita.com/toryuneko/items/c023031b61886cae2a99)
    
* 動的型付けをどのように実現しているのか？
  * 型の宣言がないのは、メモリの上で同じ型として扱うように設計しているから
    * 例：pyhon(動的型付け言語)は、変数のメモリ先頭部分がPyObject型系
      * PyObject
        * └ PyVarObject
          * └ PyTypeObject
    * 参考：[Pythonの処理系はどのように実装され，どのように動いているのか？ 我々はその実態を調査すべくアマゾンへと飛んだ．](https://www.slideshare.net/utgw/python-73389442)

* 動的型付けのメリデメ
  * メリット
    * 柔軟にデータの処理ができるようになる
      * 例：変数を使用するときにデータ型を気にしなくて良い
      * 例：実行時に代入する型が以前のデータ型と異なってても使用することができる
  * デメリット
    * 静的型付けは、コンパイル時に変数の型を設定し、型の整合性をチェックしていたため、バグに気づきやすかった
    * 一方で、動的型付けは実行時に型の整合性チェックなどは行わないため、変数の中にint型のデータをしれたかったのに、text型になっていたなどの状態に気づきにくい
        * 期待しているデータが取れていなくても、気づけない可能性がある（バグの発生によわい）

* 対応策：推論型
  * コンパイル時に型チェックをしつつ、型の宣言をしないという目的を達するために作られた
    * コンピュータがデータ型を推論するもの
    * ML系（OCmal,Haskellなど）が得意とする

## 3.雑談メモ
* 型の種類一覧｜[C言語の基礎](https://jeea.or.jp/course/contents/12107/)
* [プリミティブ型【変数の型】](https://wa3.i-3-i.info/word15876.html)
* [javaのプリミティブ型一覧](https://techacademy.jp/magazine/22653)