
function sayHello(name, lastName, age) {  // Приветствие
    name = prompt('Your name?')
    lastName = prompt('Your lastname?')
    age = prompt('Your age?')
    alert('Hello, ' + name + ' ' + lastName + ', you are ' + age)
}


function calcDay(key) {   //  День недели 
    const week = {
        1: 'понедельник',
        2: 'вторник',
        3:'среда',
        4:'четверг',
        5:'пятница',
        6:'суббота',
        7:'воскресенье',
    }
    console.log(week[key]);
}


function sayHello2(name, time) {   // Приветствие в зависимости от времени суток
    if (time > 3 && time < 7){
        console.log("Доброй ночи " + name);
    }
    if (time > 6 && time < 12) {
        console.log("Доброе утро " + name);
    }
    if (time > 11 && time < 17) {
        console.log("Добрый день " + name);
    }
    if (time > 16 && time < 22) {
        console.log("Добрый вечер " + name);
    }
    if (time > 23 || time < 4) {
        console.log("Доброй ночи " + name);
    }
}



// Массивы 

let arr = [2,4,6,8];   // Проверить чётные числа
function isEven(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            newArr.push(array[i])
        } 
    }
    if (newArr.length === array.length) {
        return true
    } else {
        return false
    }
}


function calcAriphmetic(array) {  // Найти среднее арифметическое 
    let newArr = [];
    let sum1;
    let sum2
    for (let i = 0; i < array.length; i++) {
        sum1 = array[i] + array[i+1]
        newArr.push(sum1)
        i++
    }
    for (let j = 0; j < array.length; j++) {
        sum2 = newArr[j] + newArr[j+1]
        let len = array.length
        let result = sum2 / len
        return result
    }
}


// Объекты

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function calcSalaries() {  // Калькулятор зарплат
    let sumSalaries = 0;
    for (const salarie in salaries) {
        sumSalaries += salaries[salarie]
        
    }
    console.log(sumSalaries);
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {   // Умножает все числовые свойства объекта на 2
    for (const key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2
        }
       
    }
    return menu
}

// Циклы обычные


for ( let i =11; i<=33; i+=10){
  for (let j =0; j<=2; j++){
    const num = i + j;
    //document.write(num + ' ')
  }
}

let str = '';

for (let i = 0; i < 6; i++) {
	str += 'xx';
    document.write(str + '<br>');
}

for (let i = 1; i <= 9; i++) {
    for (let index = 1; index <= 3; index++) {
        document.write(i);
    }
    document.write('<br>');
}

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= i; j++) {
		document.write(i);
	}
	
	document.write('<br>');
}

for (let i = 1; i <= 9; i +=2 ) {
	for (let j = 1; j <= i; j++) {
		document.write(i);
	}
	
	document.write('<br>');
}

for (let i = 10; i >= 2; i -= 2) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += 'x'
    }
    document.write(str + '<br>');
}

for (let i = 9; i >= 1; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
        document.write(i);
    }
    document.write('<br>');
}


// Циклы: работа с массивами

let ciklArr = [];

for (let i = 1; i <= 5; i++) {
    let ciklStr = '';
    for (let j = 0; j < 5; j++) {
        ciklStr += i
    }
    ciklArr.push(ciklStr)
}
console.log(ciklArr);