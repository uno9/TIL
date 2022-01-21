export function camel(json) {
  // todo:文字列を節単位に区切り、最初の文字だけ大文字にする事ができていない
  var format_array = [];
  const separate_key = " ";
  var array_string = json.text.split(separate_key);
  console.log(array_string);
  for(i=0; i.length > 0; i++){
    console.log(i);
    console.log(array_string[i].toUpperCase()+array_string[i].toLowerCase());
    // format_array.push()
  }
  // return format_array;
}

export function kebab(json) {
  var lower_case = json.text.toLowerCase();
  return lower_case.replace(/\s+/g,'-');
}

export function snake(json) {
  var lower_case = json.text.toLowerCase();
  return lower_case.replace(/\s+/g,'_');
}