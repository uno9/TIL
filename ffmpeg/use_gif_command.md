# gifでつかえるコマンド
作成日時:2021/2/10

## 環境
使用するディレクトリ   
`cd C:\Users\OWNER\Documents\Captura`

## 1.gifで4倍速かつwigth:600pxで作成するとき
` ffmpeg -i no_check.gif -vf scale=700:-1 -af atempo=2.0,atempo=2.0 no_check_process.gif`

## 2.
* xxxxをxxxとする。

## 参考サイト
- [それffmprgで出来るよ！](https://qiita.com/cha84rakanal/items/e84fe4eb6fbe2ae13fd8#)
- [ffmpegを使って動画の再生速度を変えてみる](http://fftest33.blog.fc2.com/blog-entry-36.html)
- [ffmpegでとにかく綺麗なGIFを作りたい](https://qiita.com/yusuga/items/ba7b5c2cac3f2928f040)
