$(document).ready(function(){
"use strict";/*restrict undeclared variables*/
//var msg="hello JavaScript";	
//   console.log(msg);
 
 //  var resultsDiv = document.getElementById("results");	
 //   resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

var resultList = $("#resultList");
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
 resultList.toggle(500);

if (toggleButton.text() == "Hide") toggleButton.text("Show");
else toggleButton.text("Hide");
});


 $("header nav li").css("font-weight", "bold");


/*var result = {
 name: "jQuery",
 language: "JavaScript",
 score: 4.5,
 showLog: function(){
 },
 owner: {
  login: "shownwildermuth",
  id: 123456
 }
};
result.phoneNumber = "123-456-7890";

console.log(result.phoneNumber);  */

$("#gitHubSearchForm").on("submit", function(){

var searchPhrase = $("#searchPhrase").val();
var useStars = $("#useStars").val();
var langChoice = $("#langChoice").val();

if(searchPhrase){
 resultList.text("performing search...");
 
var gitHubSearch = "https://api.github.com/search/repositories?q=" + searchPhrase;

if (langChoice != "All"){
 gitHubSearch += "+language: " + langChoice;
}
if (useStars){
 gitHubSearch += "&sort=stars";
}

var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars"

$.get(gitHubSearch,function(r){
 //.success(function(r){
 //console.log(r.items.length);
 displayResults(r.items);
});
}
 return false;
});


//.fail(function(err){
// console.log("Failed to query Github");
//})
//.done(function (){
 //
//});
//var results = [{
 //name: "jQuery",
 //language: "JavaScript",
 //score: 4.5,
 //showLog: function(){
 //},
 //owner: {
 // login: "shownwildermuth",
 // id: 123456
 //}
//},{
 //name: "jQuery UI",
 //language: "JavaScript",
 //score: 3.5,
 //showLog: function(){
 //},
 //owner: {
 // login: "shownwildermuth",
 // id: 123456
 //}
//}];

function displayResults(results){
resultList.empty();
$.each(results, function(i, item){

var newResult = $("<div class='result'>" +
 "<div class= 'title'>" + item.name + "</div>" +
"<div> language: " + item.language + "</div>" +
"<div> owner: " + item.owner.login + "</div>" +
"</div>");

newResult.hover(function(){
//make it darker
$(this).css("background-color", "lightgray");
}, function() {
//reverse
$(this).css("background-color", "transparent");
});

resultList.append(newResult);
});
}
//for(var x=0; x < results.length; x++){
 //var result = results[x];
 //console.log(result.name);
//}
//console.log(results.length);
//console.log(results[0].name);
//results.push(result);
//results.push({
// name: "dummy project"
//});

 /*console.log("msg is" + typeof(msg));
 console.log("resultsDiv is" + typeof(resultsDiv));

 var none;
 console.log("none is" + typeof(none));

 var aNumber = 0;
 console.log("aNumber is" + typeof(aNumber));

 
 var trueFalse = true;
 console.log("trueFalse is" + typeof(trueFalse));

 if(none == undefined){
 console.log("none is undefined");
}

if(aNumber == "10"){
console.log("10 is 10");
}

//function

//function showMsg(msg){
 //console.log("showMsg: " + msg);
//}

function showMsg(msg, more){
 if(more){	
 console.log("showMsg: " + msg + more);
 }else{
  console.log("showMsg: " + msg);
   }
}
showMsg("some information");
showMsg("more informaion", " and even more");

var showIt = function (msg){
 console.log(msg);
 }

showIt("some message");
function showItThen(msg, callback){
 showIt(msg);
 callback();
}

showItThen("showItThen called", function(){
 console.log("callback called");
});

var inGlobal = true;

function testMe(){
 console.log("testMe(): " + inGlobal);

 var someMsg = "some Message";
 console.log("testMe(): " + someMsg);

showItThen("with Closure", function(){
 showIt("testMe with Closure(): " + someMsg);
 
 });
}

testMe();*/

});























