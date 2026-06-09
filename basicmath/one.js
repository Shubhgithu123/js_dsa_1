// print digits of a number 

let n = 53127;

function printDigit(num){
    
    while(num != 0){
        let res = Math.floor(num%10);
        console.log(res);
        num = Math.floor(num / 10);
    }
}

// printDigit(n);

//count all digits of a number 

function countDigit (num){

        let count = 0;

        while( num != 0 ){

            let res = Math.floor( num % 10 );

            count++;

            num = Math.floor(num / 10) ;
        }

        return count;

}

// console.log(countDigit(n));

//sum of digits of a number

function sumofDigits (num){

    let sum = 0 ;

    while ( num != 0 ) { 

        let res = Math.floor( num % 10 );

        sum = sum + res ;

        num = Math.floor(num / 10 ); 
    }

    return sum ; 

}

// console.log(sumofDigits(n));

//reverse a number 

function reverseNumber (num) {

    let rev = 0 ;

    while ( num != 0 ) {

       let  digit = Math.floor( num % 10 ) ;

        rev = rev * 10 + digit ; 
        
        num = Math.floor( num / 10 ) ;
    } 

    return rev ; 
}

// console.log(reverseNumber(n));

//palindrome number 

let inp = 1221;

function checkPalindrome(num){
    // let originalnum = num;
    // let revnum = 0;

    // while( num != 0 ){

    //     let digit = Math.floor(num%10);

    //     revnum = revnum * 10 + digit ;

    //     num = Math.floor(num / 10);
    // }

    // // console.log(revnum)
    // // console.log(num)
   
    // if(revnum === originalnum){
    //     return true;
    // }
    // else { 
    //     return false;
    // } OR

    let originalnum = num ;
    let reversenumber = reverseNumber(num);

    if( originalnum === reversenumber ){
        return true;
    }
    else {
        return false;
    }
}

// console.log(checkPalindrome(inp));

function checkifPrimeorNot(num){
    // for(let i = 2 ; i <= num -1 ; i++ ) {

    //     if( num % i === 0){
    //         return false
    //     }

    // }

    // //yaha tabhi aaoge jab loop se bahar nikloge or loop se bahar nikloge jab kabhi bhi remainde o nahi aaya isla mtlb its a prime number
    // return true;

    //  another approach using square of number

    for(let i = 2 ; i*i <= num ; i++){
        if(num%i == 0){
            return false;

        }
    }
    return true;
}


// console.log(checkifPrimeorNot(12))

// gdc / hcf of two numbers is = gcd(a,b) = gcd( b , a % b ) 

function gcdofNumber (n1,n2){
        let count = 0;
        while(n2 != 0){
            let originalnumber = n2;
            n2 = n1 % n2;
            n1 = originalnumber;
            count ++;
        }
        // return [n1,count];
        return n1;
}


// console.log(gcdofNumber(18,7))

// lcm * hcf = a* b
// i.e. lcm = (a*b)/hcf

function lcmofNumbers(n1,n2){

    let gcd = gcdofNumber(n1,n2);

    let lcm = Math.floor(( n1 * n2 ) / gcd) ;

    return lcm;

}
 

// console.log(lcmofNumbers(18,12));

function checkarmstrong(num){

    let originalnumber = num ;

    let sum = 0 ;

    while( num != 0 ) {

        let digit = Math.floor(num % 10) ;
        // console.log(digit);

        let cubeofdigit = digit * digit * digit ;
        // console.log(cubeofdigit);

        sum = sum + cubeofdigit ; 
        // console.log(sum);

        num = Math.floor( num / 10 );
        // console.log(num)
        // console.log(`=========`)
    }

    if( originalnumber === sum ){
        return true ;
    }
    else{
        return false;
    }
}

// console.log(checkarmstrong(153));


//find divisor or check perfect number 

function findDivisor (num) {

    let originalnumber = num ;
    let sum = 1 ; // 0 or we can directly assign with 1 because 1 can divide all numbers
    let firstfactor = 0;
    let secfactor = 0;
    for( let i = 2 ; i*i <= num ; i++ ){

        if( num % i === 0 ){

            //i ne num ko perfectly divide kardia h
            //toh ab factor pair kya banega 
            //1st factor -> i
            //2nd ke == we know i*x = 6 then x = 6 / i then will get second factor 

             firstfactor = i;
             secfactor = Math.floor(num / i) ; 

            sum = sum + firstfactor + secfactor ;
        }

        if(sum === originalnumber) {
            console.log(`yes it is a perfect number : ${num}`);
            return [firstfactor,secfactor];
        }
        else{
            return false;
        }
    }

}

console.log(findDivisor(6));

//executed git reset --hard  to check or try to lost all changes 

//fourth change