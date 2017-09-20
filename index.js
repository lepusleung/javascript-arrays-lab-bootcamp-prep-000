const app = "I don't do much."

var names = ['Milo', 'Otis', 'Garfield'];

function kittens() {
  return names;
}

function destructivelyAppendKitten(name) {
  return names.push(name);
}

function destructivelyPrependKitten(name) {
  return names.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return names.pop();
}

function destructivelyRemoveFirstKitten(){
  return names.shift();
}

function appendKitten(name){
  return names.splice();
}

function prependKitten(name){
  return names.splice(1, name);
}

function removeLastKitten(){
  return names.slice(0, names.length - 1);
}

function removeFirstKitten(){
  return names.slice(1);
}

