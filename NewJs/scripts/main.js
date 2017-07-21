var sign= prompt("What is your star sign?").toLowerCase();//toLowerCase converts the string to lowercase to prevent misunderstanding of users input
//switch statement that matches the correct input from the user and provides a pre-written answer
switch(sign){

case "taurus":
alert("2321");
break;
case "virgo":
alert("111");
break;
case "leo":
alert("1233");
break;
default: 
alert("that sucks!");
break;

}
//Counts from 0 to 10 and increments by one on each loop pass
for(var i=0; i <11; i++){
	console.log(i);
}

for(var numberList=1; numberList<101; numberList++){

	if(numberList%3 ===0){
		if(numberList%5===0){
			console.log("fizzbuzz");
		}
		else
		{
			console.log("Fizz");

		}
	
	}
	else if(numberList%5===0){
		console.log("Buzz");

	}
	else
{
		console.log(numberList);
}

}
var numberCount = 1;

do
{
	console.log(numberCount);
	numberCount++;

}while(numberCount <11);

var friends = ["Bill","Lucy","Becky","Mark","Percy"];

function greetFriends()
{
	for(i = 0; i<friends.length; i++)
	{
		console.log("Oh hi", friends[i]);
	}

}
greetFriends();