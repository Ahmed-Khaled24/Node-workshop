function greet() {
    console.log('Hello!');
}


// 2
greet.language = 'English';
greet.introduce = function() {
    console.log('I am a function!');
}
console.log(greet.language);
greet.introduce();
