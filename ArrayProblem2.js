
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together

let primeFactorsArray = new Array();

function main()
{

    let checkForFactors = false;
    //console.log("Please enter the first no. to get prime number: ");
    //taking input for calculating prime factors
    let n = 1000;

    //iterating over all values, which divides n
    for(let i=2;i<=n;i++)
    {
        if(n%i==0)
        {
            //finding if the particular value is prime or not.
            //check is bool value.
            let check = prime(i);

            if(!check)
            {
                //print the prime factors
                console.log("Prime Factors: "+i);
                primeFactorsArray.push(i);
                checkForFactors=true;
            }
            else
            {
                continue;
            }
        }
    }
//if check for factors remain false, then there are no factors of numbers and number itself is prime.
if(!checkForFactors)
{
    console.log("Number has no prime factors, and itself is prime ");

}
console.log("Prime Factors Array: "+primeFactorsArray);
}

function prime(n)
{

    let check=false;
    //iterating loop upto n/2

    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        //if n is divisible by any iterator, then n is not prime no.
        
        if(n%i==0)
        {
            return true;
        }
    }
    if(!check)
    {
        return false
    }

}
main();