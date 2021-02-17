# Useful処理集
作成日時:2021/2/17

## 1.定期的に特定のURLの状況を見に行く

※linuxを使用して5分（300秒）ごとに状態を監視するコマンド
`watch -t -d -n 300 "curl http://localhost:3000/api/v1/daily_csvs | python3 -mjson.tool"`

* 使用コマンド
  * watch
    * -t : ヘッダーの情報を表示しない
    * -d : 差分は色をつける
    * -n : インターバルの時間を秒で設定する
  * pyhton3 -mjson.tool : jsonで返ってくる情報を整形
