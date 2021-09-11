# クラスとオブジェクト
作成日時:2021/9/10

## 1.クラスとは
* > オブジェクト指向で出てくる概念のひとつで「それが、どんなものか」を表した設計図のこと
* クラス、オブジェクト、インスタンスという概念がセット
  * クラス：設計図
  * インスタンス：設計図（クラス）から生成されたモノ
  * オブジェクト：クラスとかインスタンスをふんわり表現したもの

例：AWS-SDK(node.js)を使用してS3にアクセスする
```javascript
// AWS-SDKの中のS3クラスを使用
// s3というクラスを生成（インスタンス）
var s3 = new AWS.S3(); 
// AWS.S3クラス（設計図）に入っている「abortMultipartUpload」という機能を使用
s3.abortMultipartUpload(params, function (err, data) {
  if (err) console.log(err, err.stack); 
  else     console.log(data);
});
```
出典：[Sending a Request Using S3](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

## 2.オブジェクトとは
* xxxxをxxxとする。
→
* xxxxをxxxとする。
→


## 3.オブジェクト指向

## 4.クラスとオブジェクト