# ffmpegでつかえるコマンド
作成日時:2021/2/10

## 環境
使用するディレクトリ   
`cd C:\Users\OWNER\Documents\Captura`

## 1.gifで4倍速かつwigth:600pxで作成するとき
` ffmpeg -i no_check.gif -vf scale=700:-1 -af atempo=2.0,atempo=2.0 no_check_process.gif`

## 2.写真のサイズを変更する
* アスペクト比を維持したままリサイズ
  * 自動で設定したいほうに -1 をセット
  * 例：横のみ変更する
` ffmpeg -i test_original.mp4 -vf scale=1280:-1 test.mp4`
  * 例：高さのみ変更する
  ` ffmpeg -i test_original.jpg -vf scale=-1:720 test.jpg`
* 指定したサイズにリサイズ
`ffmpeg -i test_original.png -s 1280x720 test.png`

## 参考サイト
- [それffmprgで出来るよ！](https://qiita.com/cha84rakanal/items/e84fe4eb6fbe2ae13fd8#)
- [ffmpegを使って動画の再生速度を変えてみる](http://fftest33.blog.fc2.com/blog-entry-36.html)
- [ffmpegでとにかく綺麗なGIFを作りたい](https://qiita.com/yusuga/items/ba7b5c2cac3f2928f040)
- [【ffmpeg】動画の解像度を指定してリサイズ、アスペクト比を維持したまま解像度を変更する、回転する](https://qiita.com/riversun/items/d09d8e596a20ec1798f3)
