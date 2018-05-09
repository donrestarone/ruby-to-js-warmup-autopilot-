var apples = 14;
console.log(apples);
console.log('I have ' + apples + ' apples');

var materials = ['wood', 'metal', 'stone'];
var words = {
	'elephant': "world's largest land mammal",
	'school': 'a place of learning',
	'ice cream': 'a delicious milk-based dessert',
};

console.log(materials)
console.log(words)

var num = 2;

if (num > 10) {
	console.log(num + ' is greater than 10');
} else if (num === 10) {
	console.log(num + ' is exactly 10');
} else {
	console.log(num + ' must be less than 10');
}


for (i = 0; i < 10; i++) {
	console.log('doing the same thing over and over');
}

var base = 5;

for (i = 0; i < 20; i++) {
	console.log(i + base);
}





for (i = 0; i < 100; i++) {
	var total = 0 + 1;
	total += i
	console.log(total);
}


for (i = 3; i < 15; i++) {
	if (i > 9) {
		console.log('you can ride the rollercoaster!');
	} else {
		console.log('you are too short to ride the rollercoaster!');
	}
}


var containers = ['purse', 'wallet', 'backpack'];
for (i= 0; i < containers.length; i++) {
	console.log(containers[i])
}

function helloWorld(){
	console.log('hello world');
}

helloWorld()

function add(first_num, second_num){
	total = first_num + second_num;
	return total;
}

console.log(add(5, 7))