







/*
//Объекты внутри массивов внутри объектов
 company = { 
			companyName: "Healthy Candy",
			activities:	[
							"food manufacturing",
							"improving kids' health",
							"manufacturing toys"
						],
			address: 	[
							{
								 street: "2nd street",
								 number: "123",
								 zipcode: "33116",
								 city: "Miami",
								 state: "Florida"
							},
							{
							street: "1st West avenue",
							number: "5",
							zipcode: "75001",
							city: "Addison",
							state: "Texas"
							}
						],
			yearOfEstablishment: 2021
};
*/

/*
numbers = new Array(5);
numbers[0] = 1;
console.log(numbers);

[
	[ 
		[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]
	],
	[ 
		[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]
	],
	[ 
		[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]
	]
]
*/

/*
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(0, 1);
console.log(arrOfShapes);
*/

/*
numbers = [14, 22, 33];
numbers[6] = 9;
console.log(numbers.length);
console.log("Значения ячеек массива numbers: ", numbers);
*/

/*
function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    shooters.push(
		function() {
			alert(i); // выводит свой номер
		}
	);
  }

  return shooters;
}

var army = makeArmy();

console.log(army[0]());
console.log(army[1]());
console.log(army[5]());
*/

/*
function makeArmy() {

  let shooters = [];

  for (var i = 0; i < 10; i++) {
    shooters.push(i);
  }

  return shooters;
}

var army = makeArmy();

console.log(army[0]);
console.log(army[1]);
*/



/*
function hideShow() {
	if (displayPDn == 1) {
		PDn.style.display = 'inline';
		displayPDn = 0;
	} else {
		PDn.style.display = 'none';
		displayPDn = 1;
	}
}

function hideShow2() {
	if (displayNCICC == 1) {
		NCICC.style.display = 'inline';
		displayNCICC = 0;
	} else {
		NCICC.style.display = 'none';
		displayNCICC = 1;
	}
}
*/