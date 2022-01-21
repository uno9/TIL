export function camel(json) {
  var format_array = [];
  const separate_key = " ";
  var array_string = json.text.split(separate_key);
  for(var i = 0; i < array_string.length; i++){
    format_array.push(
      array_string[i].charAt(0).toUpperCase() + array_string[i].slice(1)
    );
  }
  return format_array.join('');
}

export function kebab(json) {
  var lower_case = json.text.toLowerCase();
  return lower_case.replace(/\s+/g,'-');
}

export function snake(json) {
  var lower_case = json.text.toLowerCase();
  return lower_case.replace(/\s+/g,'_');
}