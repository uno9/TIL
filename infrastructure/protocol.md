# プロトコル
作成日：2021/12/31


## プロトコルとは？
- 通信規約のこと
- さまざまな機器やインターネットに接続するときなど、通信を行う際に用いられる

## TCP/IPの代表的なプロトコル
- HTTP
  - WebサーバとWebブラウザ間で通信をするために用いられる
- HTTPS
  - HTTPS→HTTP over SSL/TLS
  - HTTPの通信は暗号化されていないため、通信の内容を暗号化するためのプロトコルが誕生した
  - HTTPの動作は上記とおなじ
- FTP
  - File Transfer Protcol
  - ファイルを転送するときに使用するもの
  -通信時にパスワード・ファイルの暗号化は行わない
- SSH
  - Secure Shell
  - telnet
    - 他のパソコンを遠隔で操作する技術
  - telnetは、通信の内容を暗号化しないため、暗号化対応したのがSSH
- DNS
  - Domain Name System
  - コンピュータライクなネットワーク上の住所、IPアドレスを人間がわかりやすいように命名（ドメイン）
  - そのドメインとIPアドレスの対応表をもち、ドメインに対応したIPアドレスを教えてくれるシステム
- SMTP
  - Simple Mail Transfer Protocol
  - メールを送受信するときに使用するもの
  - メールの中継を行う際も使用される（メール前半のやり取り）
