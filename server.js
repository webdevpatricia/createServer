require ('http');

var port7000 = 7000;
var port7500 = 7500;

function handleRequest (request,response){
	console.log (response);
};

var server = http.createserver(handleRequest);

server.listen (port7000, function(){
	console.log('You are the best!');

});

server.listen (port7500, function(){
	console.log('You are not the best!')
})