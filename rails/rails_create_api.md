# rails api
作成日時:2021/2/23

# 参考サイトの抜粋
https://qiita.com/k-penguin-sato/items/adba7a1a1ecc3582a9c9

### プロジェクトの作成
1. APIモードでアプリの作成   
**--api**を指定することで、APIモードを使用できる
```
$ rails new todo --api
```
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
* config > routes
* routesに記載するnamespaceの関係は、コントローラーの配置と同じような場所になる
* resourcesを使用することで、一通りのパスを自動で生成できる
  * 特定のパスのみ必要な場合は、`only []`を使用することで、無駄なパスを作成することなくルーティングを作成することができる
```
config/routes.rb
Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :todos
    end
  end
end
```
1. コントローラーの設定
```
module Api
  module V1
    class TodosController < ApplicationController
      before_action :set_post, only: [:show, :edit, :update, :destroy]

      def index
        @posts = Post.order(created_at: :desc)
        render json: { 
          status: 'SUCCESS', 
          message: 'Loaded posts', 
          data: @posts
        }
      end

      def show
        render json: { 
          status: 'SUCCESS', 
          message: 'Loaded the post', 
          data: @post 
        }
      end

      def create
        post = Post.new(
          title: post_params[:title],
          description: post_params[:description],
          limit: post_params[:limit]
        )

        if post.save
          render json: { 
            status: 'SUCCESS', 
            message: 'Post title', 
            data: post
          }
        else
          render json: { 
            status: 'ERROR', 
            message: 'Not Post title', 
            data: post.errors 
          }
        end
      end

      def destroy
        @post.destroy
        render json: { 
          status: 'SUCCESS', 
          message: 'Deleted the post', 
          data: @post 
        }
      end

      def update
        if @post.update(post_params)
          render json: { 
            status: 'SUCCESS', 
            message: 'Updated the post', 
            data: @post
          }
        else
          render json: { 
            status: 'ERROR', 
            message: 'Not updated', 
            data: @post.errors 
          }
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description, :limit)
      end
    end
  end
end
```

## 2.ハマりポイント
* [ストロングパラメータ](https://techblog.kyamanak.com/entry/2017/08/29/012909)
  * paramsでは、入力された情報がURLに追加されたりされなかったり、しつつDBに送信される
  * createチェックを行った際に、400/500エラーが出現
  * 下記をポストマンで実行してみる（👀送信形式がJSONになっているか確認！）
  ```
  $ curl -X POST 'http://localhost:3000/todos' -H "Content-Type: application/json" -d '{"":{"title":"aaa","description":"dfg","limit":"2020-01-01"}}'
  ```
  
* [【Rails】APIにCORSの設定をする方法](https://mintaku-blog.net/rails-cors/)
  * APIとsvelteをつなぐ際に、cros-originエラーが出現
  * cros対策を行うことが出来るライブラリを追加   
  Gemfile
  ```
  gem 'rack-cors'
  ```
  config/application.rb   
  ※一番最後の部分などに追記すればOK
  ```
  config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins "*"
        resource "*",
        headers: :any,
        methods: [:get, :post, :options, :head]
    end
  ```
  * origins：許可したいクライアントのURL
  * resource：許可したいリソースファイル
  * headers：アクセスを許可するヘッダーの内容
  * methods：許可したいHTTPメソッド（post get put deleteなど）
    * 記入例：
    ```
    config.middleware.insert_before 0, Rack::Cors do
        allow do
            origins "http://localhost:8000", "https://example.jp"
            resource "*",
            headers: :any,
            methods: [:get, :post, :patch, :delete, :options, :head]
        end
    end
    ```

* [RailsのAPIモードでいい感じにCORS設定をする](https://qiita.com/sugo/items/9c5f9cc5d88e6d7efa2d)
  * 上記のcros設定に関する別記事のため、分からない所を補う形で閲覧することを推奨
