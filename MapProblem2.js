//defining map which will contain months and array of individuals  with birth in specific month
let mapformonth= new Map();
//iterating over 50 persons
for(let i=1;i<=50;i++)
{
    //getting month by math.random function
    let month= Math.floor(Math.random()*12)%12+1;
    //checking if month is there in map
    //if not, then new array is created for specific key and person is pushed in array and set in map
    if(!mapformonth.has(month))
    {
        var arrayForElements= new Array();
        arrayForElements.push(i);
        mapformonth.set(month,arrayForElements);
    }
    //if month is already there as key in map, then person is added in array and set in map.
    else
    {
        arrayForElements= mapformonth.get(month);
        arrayForElements.push(i);
        mapformonth.set(month,arrayForElements);
    }

}
//printing map
console.log(mapformonth);
//getting count for each key(month)
for(let key of mapformonth.keys())
{
    let array1= mapformonth.get(key);
    let noOfElements= array1.length;
    console.log(key +"->"+noOfElements);
}
//total persons in each month by foreach method
console.log("foreach method");
mapformonth.forEach((value,key)=>
console.log(key+"->"+value.length));