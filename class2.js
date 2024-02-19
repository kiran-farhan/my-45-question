//question #2//
var personName = "Eric";
console.log('hello ${personName} ,would you like to learnpython today?');
//question # 3//
var personName = ("kiran-farhan");
console.log("lowercasename:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toUpperCase());
console.log("titlecasename:", PersonName.replace(/\ b\w /g, function (c) { return c.toUpperCase(); }));
//question # 4//
console.log('Quaid-e-Azam once said,"Expect the best, prepare for the worst."');
//question # 5//
var famous_person = "Quaid-e-Azam";
var Message = famous_person + '"Expect the best, prepare for the worst."';
console.log(message);
//question # 6//
var names = "/t Kiran-Farhan \n";
console.log("Name with white space", name);
var strippedname = names.trim();
console.log("stripped name:", strippedname);
//question # 7+8//
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//question # 9//
var favouriteName = (4);
console.log("My favourite number is (favouriteName)");
//question # 10//
var Myname = "Kiran-Farhan";
console.log("I am a governor IT initiative student", Myname);
//Adding comments
//author: [Kiran_Farhan]
//date: [This is my information]
//question # 11//
var Names = ["Ayesha", "Alia", "Ani", "Ateefa"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//question # 12//
var names = ['"Ayesha","Alia","Ani","Ateefa"'];
var message = 'Hello girls are you my bestfriend?';
console.log(names[0] + "" + message);
console.log(names[1] + "" + message);
console.log(names[2] + "" + message);
console.log(names[3] + "" + message);
//question # 13//
var transportation = ["Honda", "Audi", "Fortuner", "Bugatti", "Ferrari"];
'transportation-map ((items)=>(console.log("I would like to own $ {items}")));;
//question # 14//
var guestArray = ['"Ayesha","Mahnoor","Ateefa"'];
guestArray.map(function (items) { return (console.log("Dear $ {items}, You are invited to the dinner")); });
//question # 15//
var guestArray = ["Ayesha", "Mahnoor", "Ateefa"];
var cannotAttend = "Ateefa";
console.log(cannotAttend + " ", "cannot attend the dinnner.");
var newGuest = "Sareema";
guestArray[guestArray.indexOf(cannotAttend)];
newGuest;
console.log(guestArray);
guestArray.map(items);
console.log("Dear $ {items}, you are invited to the dinner");
