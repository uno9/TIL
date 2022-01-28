import fetch from 'node-fetch';
import { snake, kebab, camel } from './branch_case.mjs';

// # API source script
// https://script.google.com/home/projects/1VjSYAHTrn64djVj4og5hMzNL-8Xx2z8OGGdWSR1UZhHT_zqsS2nEKy41/edit

// # コマンド引数の受け取り
// process.argv[0]：node.exe
// process.argv[1]：実行ファイル（translate.mjs）
// process.argv[2]：引数
// process.argv[3]：ブランチのフォーマットを選択

// 入力結果：翻訳した英語を指定したケースで返す

function getWord(translate, target, format){
  const google_translate = "https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec";
  var param = {
    en: ["ja", "en"]
  }
  var url = `${google_translate}?text=${translate}&source=${param[target][0]}&target=${param[target][1]}`;
  const format_error_message = "対応しているフォーマットは、【snake_case, kebab-case, CamelCase】です。";


  fetch(url)
  .then(response => {
    // エラー処理
    if (!response.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return response.json();
  })
  .then(json => {
    var formatted_variables = branch_format(format, json);
    console.log(
      formatted_variables == false ?
        format_error_message : `翻訳結果 > \n ${formatted_variables}`
    );
  })
  .catch(error => {
    console.log(`エラー内容 > \n ${error.text}`);
  });
}

function branch_format(format,json){
  switch(format){
    case 'snake':
      return snake(json);
    case 'kebab':
      return kebab(json);
    case 'camel':
      console.log(camel(json));
      return camel(json);
    default:
      return false;
  }
}



getWord(process.argv[2],'en', process.argv[3]);