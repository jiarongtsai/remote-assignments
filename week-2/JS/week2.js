////// Assignment 1: Function and Array //////

//for-loop
function max(numbers){
    // declare an variable called "biggest" to save the biggest number
    let biggest = numbers[0]
   
    // loop the array
    for( let i=1; i<numbers.length; i++){
        // compare all item with "biggest", and update the "biggest" value
        if(numbers[i] > biggest){
            biggest = numbers[i]
        }
    }    
    return biggest
  }
console.log(max([1, 2, 4, 5])); // result to 5 
console.log(max([5, 2, 7, 1, 6])); // result to 7


////// Assignment 2: Object //////

function calculate(args){ 
    let result;
    if(args.op==="+"){ 
        result=args.n1+args.n2;
    }else if(args.op==="-"){ 
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result; 
}

// 1.JSON literal
console.log(calculate({n1: 3, n2: 4, op:"+"}))

// 2. class object
class Argument{
  constructor(n1, n2, op){
    this.n1 = n1
    this.n2 = n2
    this.op = op
  }
}
let classArgument = new Argument(3, 4, "+")
console.log(calculate(classArgument))

// 3. const object
const constArgument = {
  n1: 3,
  n2: 4,
  op: "+"
}
console.log(calculate(constArgument))

// 4. new object
const newArgument = new Object()
newArgument.n1 = 3
newArgument.n2 = 4
newArgument.op = "+"
console.log(calculate(newArgument))

////// Assignment 3: Function, Array, and Object //////

function avg(data){
    // declare a variable save the result
    let sum = 0
    // loop the array and add up the price
    for(let product of data.products){
        sum += product.price
      }
    console.log(sum) 
  } 

// Call function
avg({
    size:3,
    products:[
      {
        name:"Product 1",
        price:100 
      },
      {
        name:"Product 2",
        price:700 
      },
      {
        name:"Product 3",
        price:250 
      }
    ]
  })

////// Assignment 5: Algorithm Practice //////

function twoSum(nums, target){
    //1.nested loop
    for(i=0; i<nums.length-1; i++){
        for(j=nums.length-1; j>0; j--){
            if (nums[i]+nums[j] === target)
                //在假設只有一組解的情況，找到就可以return了
                return [i, j]
        }
    }
    //2. recursive
    //3. dynamic programing
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 22));
console.log(twoSum([2, 7, 11, 15], 26));