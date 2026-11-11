var company = "Frontlines Media" ;
var company1= "FrontlinesMedia" ;
var company2= "Frontlines, Media, Educate" ;
var company3= "      Frontlines Media      "

var uc = company.toUpperCase()
var lc = company.toLowerCase()

console.log('Length of Frontlines Media =>' + company.length);
console.log('Length of FrontlinesMedia =>' + company1.length);

console.log('The Value of uc is.....' + uc)
console.log('The Value of lc is.....' + lc)

// indexing --> 0 - Position.
//console.log(company.chartAt(11)); -- getting error this compiler is not supporting to latest method of chartAt()

console.log(company.slice(0,11))
console.log(company1.slice(0,11))

console.log(company.charAt(4))
console.log(company.replace("Media","Edutech"))
console.log(company2.split(","))
console.log(company3)
console.log(company3.trim()) //--->trim will remove the spaces beginning and ending.
console.log(company.startsWith("Media"));
console.log(company.endsWith("Media"));


var age = 16;

if(age>=18)
{
  console.log("You can Vote.")
}
else
{
  console.log("You cannot Vote.")
}

var Score = 76

if(Score >= 100){

  console.log("Outstanding")
}
else if(Score >=75){

  console.log("First Class")
}
else{

  console.log("Second Class")
}

// Loops
// -- For loop
//-- while loop

for( var i= 1; i<=5; i++){
  console.log(i)
}
