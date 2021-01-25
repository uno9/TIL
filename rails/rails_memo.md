## Ruby on Rails
作成日時:2021/1/25

### 1.Rails 全体
* controllerとviewの関係
→controllerが全ての関数を保持し、各関するに対応するviewを作成・表示する
```
<!-- tasks controller -->
class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end
end
👇
<!-- tasks views/index -->
<h1>Tasks index</h1>

```
* controller(view)とmodeleの命名規則
→controller & viewは複数形
→modelは単数形

### 2. Rails command
* アプリの作成
→`rails new app名`
* [rails g command](https://qiita.com/zaru/items/cde2c46b6126867a1a64)
* テーブルの確認
  * [カラムの確認](https://qiita.com/littlekbt/items/48fa2b428147921db5a5)
  * [カラムの編集](https://qiita.com/azusanakano/items/a2847e4e582b9a627e3a)
  * 
