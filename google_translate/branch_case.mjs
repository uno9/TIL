export function camel(json) {

}

export function kebab(json) {

}

export function snake(json) {
  var lower_case = json.text.toLowerCase();
  return lower_case.replace(/\s+/g,'_');
}