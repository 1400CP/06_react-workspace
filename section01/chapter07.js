// 1. if문

let num = 9;

if(num >= 10){
  console.log("10보다 크거나 같음")
}else{
  console.log("틀렸다.졸립군")
}

// 2. switch문
//다수 조건을 처리할 때

let animal = "snake";

switch(animal){
  case "cat" : console.log("먀옹"); break;
  case "dog" : console.log("왈왈"); break;
  default : console.log("idk who you are"); break;
}