//defining the map for number and its count
let diceMap= new Map();
//defining variable of count for each number
let oneCount=0;
let twoCount=0;
let threeCount=0;
let fourCount=0;
let fiveCount=0;
let sixCount=0;
//iterating the loop until any one count is equal to 10
while(oneCount<10 && twoCount<10 && threeCount<10 && fourCount <10 && fiveCount<10 && sixCount<10)
{
//rolling the dice multiple times using math.random 
//taking modulus by dividing by 6
//taking int value after dividing
//adding 1 as result was between 0 to 5, hence made 1 to 6.
let rollingADice= Math.floor(Math.random()*12)%6+1;
//switch statement for different results after rolling a dice
switch(rollingADice)
{
    case 1:
        //increasing the count
        oneCount++;
        //adding the values in map
        //as the count increases, previous result get overrided in map
        diceMap.set(rollingADice,oneCount);
        break;
    case 2:
        twoCount++;
        diceMap.set(rollingADice,twoCount);
        break;
    case 3:
        threeCount++;
        diceMap.set(rollingADice,threeCount);
        break;
    case 4:
        fourCount++;
        diceMap.set(rollingADice,fourCount);
        break;
    case 5:
        fiveCount++;
        diceMap.set(rollingADice,fiveCount);
        break;
    case 6:
        sixCount++;
        diceMap.set(rollingADice,sixCount);
        break;
    default:
        break;

}

}
//printing map
console.log(diceMap);
//printing max value from map
//...dicemap.values signifies array of values
//choosing max and min value from array
let minValue= Math.min(...diceMap.values())
//for getting key of max and min value
//foreach is used
//function is made inside foreach and condition is checked if value matches max or min value
//function takes input in reverse order, value comes first and key comes in second
console.log( diceMap.forEach(function(value,key)
{
  if(value==minValue)
  {
      console.log("Minimum");
      console.log("Key: "+ key+"  Value: "+value);
  }   
}) );
let maxValue= Math.max(...diceMap.values());
console.log( diceMap.forEach(function(value,key)
{
  if(value==maxValue)
  {
      console.log("Maximum")
      console.log("Key: "+ key+"  Value: "+value)
  }   
}) );
