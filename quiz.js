function check(){
var scoreCount=0;
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;


// if(question1=="201"){
// console.log("correct")
// };

if(question1=="4"){scoreCount++};
if(question2=="Albany"){scoreCount++};
if(question3=="Something"){scoreCount++};
if(question4=="3"){scoreCount++};


document.write(scoreCount);

// var images =["https://sayingimages.com/wp-content/uploads/good-job-yas-meme.jpg","https://www.mememaker.net/api/bucket?path=static/img/memes/full/2016/Jan/4/1/nope-try-again.jpg"];

// var pic_select;

// if (scoreCount==3){
// pic_select = images["1"];
// }else{
// 	pic_select = images["2"];
// }



}
