# SynQ Remote LP 引継ぎ

## 全体像
 

### 1.github
1. stagingからブランチを切る
2. 追加変更などの編集が終わったら、stagingにpush
3. stagingでpushされると、自動的にnetlifyと連携しているため、netlifyのビルドを待つ
4. [nostalgic-mcnulty-20e018(stagingのサイト)](https://nostalgic-mcnulty-20e018.netlify.app/)のビルドが完了したら、動作を確認
5. 正常に動く事を確認したら、masterブランチへpushし、ビルドを待つ
6. https://www.synq-platform.com/　(prodのサイト)のビルドが完了したら、動作を確認する

#### 注意点
* masterブランチにstagingの変更を取り込んだあと、pushまでしないと反映されません
* 編集した内容を直接masterブランチへpushすることはできません


### 2.netlify

#### よく使うタブ
* deploy：ビルドの状況を確認する場所
* Site setting：ビルドやデプロイなど、サイトに関する設定を行うところ
