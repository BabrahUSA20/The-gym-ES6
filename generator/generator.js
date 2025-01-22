// const { name } = require("ejs");

//SENDN DATA INTO /OUT OF THE GENERATOR


//YOU CAN SEND OUT THE DATA FROM THE GENRATOR BUT USING THE KEYWORD "yeild"
//Example 1 
function* myGenerator() {
   const response = yield;
   console.log(`Your response is "${response}"!`);
    
}
const iterator = myGenerator();
iterator.next();
iterator.next('Hello Udacity Student');

//Example 2

function* getEmployee(){
  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
  const ages = [25, 30, 35, 40, 45, 37, 85, 18]
  const fact=[];

  for(const name of  names){
    fact.push(yield name);
  }
  return fact

}
const generatorIterator  = getEmployee();
let name = generatorIterator .next()
name = generatorIterator.next(`${name} is cool!`).value; 
name = generatorIterator.next(`${name} is awesome!`).value; 
name = generatorIterator.next(`${name} is stupendous!`).value; 
name = generatorIterator.next(`${name} is rad!`).value; 
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;
const positions = generatorIterator.next(`${name} is magnificent!`).value; 
positions.join('\n'); 
console.log(positions.joiht('\n'));



