# rails api
作成日時:2021/2/23

# 参考サイトの抜粋
https://qiita.com/k-penguin-sato/items/adba7a1a1ecc3582a9c9

### プロジェクトの作成
1. APIモードでアプリの作成   
**--api**を指定する事で、APIモードを使用できる
`$ rails new todo --api`
2. モデル・コントローラーの作成
* マイグレーションファイルを修正して、必要なカラムを作成しても良い   
（`$ rails g model todos` →マイグレーションファイルの修正→ `$ rails db:create` →`$ rails db:migrate`）
* コントローラーを作成する場合は、下記の場所に作成する
```
---- controllers

      --- api

        -- v1

         - todos_controller.rb
```

```
$ rails g model todos title:string
$ rails g controller todos
$ rails db:create
$ rake db:migrate
```
3. ルーティング
```
config/routes.rb
Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :posts
    end
  end
end
```
4. コントローラーの設定
```
module Api
  module V1
    class TodosController < ApplicationController
      before_action :set_post, only: [:show, :update, :destroy]

      def index
        posts = Post.order(created_at: :desc)
        render json: { status: 'SUCCESS', message: 'Loaded posts', data: posts }
      end

      def show
        render json: { status: 'SUCCESS', message: 'Loaded the post', data: @post }
      end

      def create
        post = Post.new(post_params)
        if post.save
          render json: { status: 'SUCCESS', data: post }
        else
          render json: { status: 'ERROR', data: post.errors }
        end
      end

      def destroy
        @post.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the post', data: @post }
      end

      def update
        if @post.update(post_params)
          render json: { status: 'SUCCESS', message: 'Updated the post', data: @post }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @post.errors }
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title)
      end
    end
  end
end
```

## 2.ハマりポイント
* https://techblog.kyamanak.com/entry/2017/08/29/012909
* https://mintaku-blog.net/rails-cors/
* https://qiita.com/sugo/items/9c5f9cc5d88e6d7efa2d
