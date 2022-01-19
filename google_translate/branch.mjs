import fetch from 'node-fetch';
import { snake } from './branch_case.mjs';

// # API source script
// https://script.google.com/home/projects/1VjSYAHTrn64djVj4og5hMzNL-8Xx2z8OGGdWSR1UZhHT_zqsS2nEKy41/edit

// # コマンド引数の受け取り
// process.argv[0]：node.exe
// process.argv[1]：実行ファイル（translate.mjs）
// process.argv[2]：引数

// 入力結果：翻訳した英語をスネークケースで返す

function getWord(translate, target){
  const google_translate = "https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec";
  var param = {
    en: ["ja", "en"]
  }

  var url = `${google_translate}?text=${translate}&source=${param[target][0]}&target=${param[target][1]}`;

  fetch(url)
  .then(response => {
    // エラー処理
    if (!response.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    return response.json();
  })
  .then(json => {
    var formatted_variables = snake(json);
    console.log(`翻訳結果 > \n ${formatted_variables}`);
  })
  .catch(error => {
    console.log(`エラー内容 > \n ${error.text}`);
  });
}

getWord(process.argv[2],'en');