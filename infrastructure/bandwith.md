# 帯域幅の計算
作成日時:2021/12/11

## 1.転送時間計算方法
* 計算式
  *  データ容量÷回線速度×伝送効率=転送にかかる秒数
  * 参考
    * https://qiita.com/takahashi-kazuki/items/ffc217fe674cf1172c58

## 2.計算手順
1. データ容量をビット数に変換
2. 回線速度をビット数に
3. 転送にかかる秒数を計算

## 3.計算例
【例題1】
> １Gbpsの回線速度で、36mbのデータ量を転送する時間は何秒？

■ 問題の整理
- 回線速度がGbs
- データ量がmb

■ 計算
36mb × 1024 × 1024 × 8bit = 301,989,888bit  
１Gbps × 1000 × 1000 × 1000 = 1,000,000,000bit  
301,989,888bit ÷ {1,000,000,000bit × 0.7(70%)} ≒ 0.4秒  
１Gbpsの回線速度で、36mbのデータ量を転送する時間は約0.4秒  

【例題2】  
少し違う系統の問題

> 1.5 M ビット/秒の伝送路を用いて 12 M バイトのデータを転送するのに必要な伝送時間は何秒か。ここで，伝送路の伝送効率を 50%とする。

■ 問題の整理
- 伝送速度がビット/秒
- 転送データ量がバイト
＊ ビット→バイト変換は、**8ビット＝1バイト**
- 伝送路の伝送効率が50%
  - 伝送速度が1.5M ビット/秒でも、50％の速度しか利用できない

■ 計算  
1.5M ビット/秒 * 0.5（伝送効率） = 0.75 M ビット/秒（伝送速度）  
12M バイト * 8 = 96M ビット  
96M ビット（データ量） / 0.75M ビット/秒 = 128秒  

【例題３】
> 700Mバイトのデータを56mbpsで送信するときにかかる秒数は？

■ 問題の整理
- ビット/秒で割り出す
＊ ビット→バイト変換は、**8ビット＝1バイト**

■ 計算  
56mbps / 8ビット = 7バイト
700Mバイト / 7バイト = 100秒

