/* console.log("hola soy test");

 const solution = (s, k) => {

    if( k > 6){

    }
  let numLetter;
  switch (s) {
    case "Mon":
      numLetter = 0;
      break;
    case "Tue":
      numLetter = 1;
      break;
    case "Wed":
      numLetter = 2;
      break;
    case "Thu":
      numLetter = 3;
      break;
    case "Fri":
      numLetter = 4;
      break;
    case "Sat":
      numLetter = 5;
      break;
    case "Sun":
      numLetter = 6;
      break;
    default:
      numLetter = "";
  }
  let days = ["Mon", "Tue", "Wed","Thu", "Fri", "Sat", "Sun"];
 
 
   return days[numLetter + k] 
} 
let valor = solution("Wed",3);
console.log(valor);
;  */

 /* for (let i = 1; i < days.length; i++) {
    console.log(days[i]);
  } */
/* const solution =( s, k)=>{
    let days = ["Mon", "Tue", "Wed","Thu", "Fri", "Sat", "Sun"];
    let save = days.forEach(day => day === s )
    console.log(save)
}   

let valor = solution("Wed",3);
console.log(valor);
 */

/* const solution = () => {
    for( let i = 999 ; i >= 100 ;i --){
       window.alert(i)
    }

}

let valor = solution();

console.log(valor) */
/* 
let result = '';
let i = 23;

do {
  i = i + 1;
  result = result + i;
} while (i < 23);

console.log(result); */
/* 
let a = [4,-2,0,5,-2,1,6];

const solution = (a) => {
   let acu = 0 
   let positivos = a.filter(num => num >= 0)
    console.log(positivos)
   for( let i = 0 ; i < 3; i++ ){
        acu = acu + positivos[i]
    }
    return acu
} */

/* const solution = (a) =>{ 
    let size = a.length
    let left = "<"
    let right = ">"
    let cadenaRepetida1 = left.repeat(size);
    let cadenaRepetida2 = right.repeat(size);
    
}

solution("<<>") */
/* let valor = solution(a)
console.log(valor) */

/* const solution = (a) => {
    let letter = "L"
    for ( let i = 0 ; i < (a -1 ); i ++ ) {
        process.stdout.write(`\n${letter}`)
    }
    process.stdout.write(letter.repeat(a))
}
let valor = solution(6)
console.log(valor) */

/* const solution = (s, k) => {
   let number = [1,2,3,4,5,6,7]; 
   for ( let i = 0 ; i < k ; i ++){
    console.log(number[i])
   }
  let numLetter;
  switch (s) {
    case "Mon":
      numLetter = 0;
      break;
    case "Tue":
      numLetter = 1;
      break;
    case "Wed":
      numLetter = 2;
      break;
    case "Thu":
      numLetter = 3;
      break;
    case "Fri":
      numLetter = 4;
      break;
    case "Sat":
      numLetter = 5;
      break;
    case "Sun":
      numLetter = 6;
      break;
    default:
      numLetter = "";
  }
  let days = ["Mon", "Tue", "Wed","Thu", "Fri", "Sat", "Sun"];
 
 
   return days[numLetter + k] 
} 
let valor = solution("Wed",15);
console.log(valor); */


