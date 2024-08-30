function Student(name, age) {    
	this.name = name;    
	this.age = age;    
	this.getInfo = function() {       
	return `${this.name}(은)는 ${this.age}세입니다.`;    
	}
}
const student = new Student('장보고', 30);      
console.log(student.getInfo()); 

function Student2(name, age) {    
	this.name = name;    
	this.age = age;    
	this.getInfo = function() {       
	return `${this.name}(은)는 ${this.age}세입니다.`;    
	}
}
const student2 = new Student2('장안보고', 32);      
console.log(student2.getInfo());           

function Student3(name, age) {    
		this.name = name;    
		this.age = age;    
		this.getInfo = function() {       
		return `${this.name}(은)는 ${this.age}세입니다.`;    
		}
};
const student3 = new Student3('장그만보고', 35);      
console.log(student3.getInfo());  


var people = {
    name : '뽀삐',
    
};

// people.name = '나정원';
people['name'] = '정재성'
// people.age = 28;
people['age'] = 28;
console.log(people);
// delete people.age;
delete people['age'];
console.log(people);

function hello(age, name) {
	
	
		return `${age} 만큼 나이드신 ${name}님 안녕하세요~`;
	}


result = hello(28, '이동희');
console.log(`result1 : ${result}`);

function hi(age, name) {
	
	`${age} 만큼 나이드신 ${name}님 안녕하세요~`;
}


result = hi(28, '송원호');
console.log(`result2 : ${result}`);

var dog = {
	name : '복실이',
	age : 3,
	favorite : '개껌',
	doog (hair, addr){
		console.log(`${this.name}(은)는 ${this.favorite}을 좋아하는 ${this.age}에요
			털 색은 ${hair}이고 ${addr}에 살아요`);
	}
};

dog.doog('흰 색', '성내동');

var workout
workout = part => `Today workout is ${part}!`;
console.log(workout('chest'));


//코드의 유효성(true와 false)을 &&로 비교해서 코드가 돌아갈 수 있도록 만드는 것이 많아보임
//나중에 if 문을 배운다면 응용 가능해보인다.

// 정답을 맞췄을 때 정답이라고 나올 수 있도록


// if you want to increse your muscle size how many reps in set?


var reps = 8;

	if (reps != 8) 
		console.log('오답입니다.');
		else console.log('정답입니다.');


		var reps1 = 10;

		if (reps1 != 8) 
			console.log('오답입니다.');
			else console.log('정답입니다.');
	

var age = 24

var message = (age<18) ? '아가는 돌아가' : 
				(age<55) ? '환영합니다!' : '여기 오시면 안됩니다';
console.log(message);





