# github action pages
作成日時:2021/2/24

## 1.github actionsの作成
* 作成する場所
`.github/workflows/gh-pages.yml`
* yml内のコード例
  * nodejs系（javascript）
  ```
    name: github pages

    on:
      push:
        branches:
          - main

    jobs:
      deploy:
        runs-on: ubuntu-18.04
        steps:
          - uses: actions/checkout@v2

          - name: Setup Node
            uses: actions/setup-node@v1
            with:
              node-version: '12.x'

          - name: Cache dependencies
            uses: actions/cache@v1
            with:
              path: ~/.npm
              key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
              restore-keys: |
                ${{ runner.os }}-node-

          - run: npm ci
          - run: npm run build

          - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./public
  ```

## 参考サイト
* [GitHub PagesにNext.js をデプロイする](https://qiita.com/manten120/items/87e9e822800403904dc8)
* [GitHub Actions による GitHub Pages への自動デプロイ](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d#nodejs-javascript-%E7%B3%BB)