# NATとは？
作成日：2022/01/17

## NATの役割
- プライベートサブネットからパブリックサブネットへ通信する際のIP変換
- プライベートなIPアドレスはプライベートの空間で、パブリックなIPアドレスはパブリックな空間でないと使用できないため、別々の空間同士で通信するにはIPを変換する必要がある


## AWSのNATとENIとIGW
- インターネットゲートウェイとNATゲートウェイを接続させるときは、NATゲートウェイにENIついていないといけない
- EIP（静的 IPアドレス）をNATにつけることで、インタネットゲートウェイとの通信が行える
  - Q. EIPがENIだった？？？？？？？？？？？（わからん） 
