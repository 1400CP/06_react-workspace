// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 오늘 날짜 생성성

let date2 = new Date("1992/01/01"); // - or / 둘 다 가능
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
// 협정세계시 UTC => 세계 모든 나라가 사용하는 시간이 시작되는 지정
let ts1 = date1.getTime();
let date4 = new Date(ts1); // 오늘 날짜를 다루기 편해진다.

console.log(date4); // 복잡한 시간을 간략하게 표기할 수 있다.

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도만
let month = date1.getMonth() + 1; // 월만, 자바스크립트는 0월부터 시작한다.
let date = date1.getDate(); // 날짜
let hour = date1.getHours(); // 시간
let minute = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setDate(15);
// 전부 set으로 수정하면 된다.

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 영어 문화권!
console.log(date1.toLocaleString()); // 지역에 맞는 시간!