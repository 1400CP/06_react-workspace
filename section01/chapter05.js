// 1. 대입 연산자
let var1 = 1; // =

// 2. 산술 연산자
// + , -, *, /, %

// 3. 복합 대입 연산자 (산술과 대입이 섞인 것)
let num7 = 10;
num7 = num7 + 20;
num7 += 20;
num7 -= 20;
console.log(num7)

// 4. 증감연산자
let num8 = 10;
num8++; // 후위연산자, 전위연산자도 있음
console.log(num8)

// 5. 논리연산자
let or = true || false;
let and = true && false;
let not = !true;
// 자바와 완전 같음
console.log(or)
console.log(and)
console.log(not)

// 6. 비교 연산자
let comp1 = 1 === "1"; // js에서는 === 를 쓴다. => 전체 확인을 해야 한다. 
let comp2 = 1 !== 2;
console.log(comp1)
console.log(comp2)

let comp3 = 2 >= 1; // 이게 트루라고?
let comp4 = 2 <= 1;
console.log(comp3)
console.log(comp4)

