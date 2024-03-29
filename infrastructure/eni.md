# ENI
作成日時:2021/2/2

## 1.ENIとは？
> Elastic Network Interface は、仮想ネットワークカードを表す VPC 内の論理ネットワーキングコンポーネントです。次の属性を含めることができます。
> - VPC の IPv4 アドレス範囲からのプライマリプライベート IPv4 アドレス
> - VPC の IPv4 アドレス範囲からの 1 つ以上のセカンダリプライベート IPv4 アドレス
> - プライベート IPv4 アドレスごとに 1 つの Elastic IP アドレス (IPv4)
> - 1 つのパブリック IPv4 アドレス
> - 1 つ以上の IPv6 アドレス
> - 1 つ以上のセキュリティグループ
> - MAC アドレス
> - 送信元/送信先チェックフラグ
> - 説明

- ネットワークインターフェースを作成設定し、同じアベイラビリティゾーンのインスタンスに対してアタッチできる
  - ネットワークインターフェースとは？
    -  ソフトウェアの場合
      -  となり合う機器とのやり取りを定義しているもの
      -  機器同士と通信をする時に、何線を使って、どんな手段で通信のやりとりを行うか決められている
      -  参考サイト：https://wa3.i-3-i.info/word11091.html
    -  ハードウェアの場合
      -  NIC(Network Interface Card)
      -  以前、コンピュータ機器はネットワークにつなぐための機能が内臓されておらず、外付けをして機能拡張をしていた。その機器がNIC。
      -  参考サイト：https://e-words.jp/w/NIC.html

- VPCでのみ使用可能
- EC2のNICにあたるもの
  - これまでは、インスタンスに直接付与されていたIPアドレスなどのネットワーク情報をENIに付与させることで、柔軟なネットワーク構成を実現した
    -  ネットワーク情報が上記引用内容
    -  参考サイト：https://cloudpack.media/793

*  AWS公式ドキュメント: https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-eni.html


