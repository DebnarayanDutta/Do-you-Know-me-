var readLineSync = require("readline-sync")
const chalk = require('chalk');
var userName = readLineSync.question("Enter Your name? ")
console.log(`Welcome ${userName} in my quizz`)




var QuestionOne= {
  question:"Who is your favorite superhero?",
  answer:"Dhruv"
}
var QuestionTwo= {
  question:"Which is my favorite sad song?",
  answer:"Channa Mereya"
}
var QuestionThree= {
  question:"Who is your favourite Marvel Hero?",
  answer:"Spiderman"
}
var QuestionFour= {
  question:"What is my favourite color?",
  answer:"Blue"
}
var QuestionFive= {
  question:"Where do I live?",
  answer:"Jamshedpur"
}


var Questions =[QuestionOne,QuestionTwo,QuestionThree,QuestionFour,QuestionFive]
let score = 0
for(let i=0;i<Questions.length;i++){
  var userAnswer = readLineSync.question(chalk.green(Questions[i].question) + " ")
  if(userAnswer.toLowerCase() === Questions[i].answer.toLowerCase()){
    score = score + 1;
    console.log(chalk.blue.bold('Score ', score))
  }else{
console.log(chalk.red.bold('Score ', score))
  }
  
  console.log("-------------------")
}
console.log("")
console.log("")
console.log("Total Score", score)
