function generateRandom (min, max){
    return Math.floor(Math.random() * max) + min;
}
function randomtext(){
   return (Math.random().toString(36).substring(2, 15));
}

function email(){
    return Math.random().toString(36).substr(2, 5)+'@gamil.com'; 
}
function wrongemail_format(){
    return Math.random().toString(36).substr(2, 5)+'gmail.com'; 
}
function randomphone(){
    return Math.floor(Math.random()*10000000256);
}
function randomstring(){
    return Math.random().toString(36).replace(/[^a-z]+/g, '') ;
}
function randomzip(){
    return Math.floor(Math.random()*1000303);
}
function wrongphonenumber(){
    return Math.floor(Math.random()*9006);
}
function randompassword(){
    return 'T@n'+Math.random().toString(36).substring(2, 15);

}
function randomwrongpassword(){
    return 'Tn'+Math.random().toString(36).substring(2, 15);
}
function randomcode(){
    return (Math.floor(Math.random()*100056));
}


module.exports = {
    generateRandom,
    randomtext,
    email,
    city:'Miami',
    username: 'sunita1',
    password:'Tester@123',
    website:'https://www.codeblock.co.in/',
    wrongemail_format,
    facebook: "https://www.facebook.com/",
    Twitter: "https://twitter.com/?lang=en",
    instagram: "https://www.instagram.com/",
    randomzip,
    randomstring,
    wrongphonenumber,
    randompassword,
    randomwrongpassword,
    randomphone,
    randomcode
}

