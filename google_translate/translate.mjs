import fetch from 'node-fetch';

function getWord(translate, target){
  const google_translate = "https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec";
  var param = {
    en: ["ja", "en"],
    ja: ["en", "ja"]
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
    console.log(`翻訳結果 > \n ${json.text}`);
  })
  .catch(error => {
    console.log(`エラー内容 > \n ${error.text}`);
  });
}

getWord("nodeコマンドに引数を受け取り、翻訳をしたい","en");