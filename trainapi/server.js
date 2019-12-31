

var fs = require('fs');
var data = fs.readFileSync('words.json');
//var datas = fs.readFileSync('stars.json');
//var stars = JSON.parse(datas);
var words = JSON.parse(data);
var cors = require('cors');
var fetch = require('node-fetch');
console.log(words);



console.log('server is running!');

var express = require('express');
var http = require('http');
var app = express();

const server = app.listen(3000, listening);

function listening(){
  console.log('listening..');
}

app.use(express.static('website'));
app.use(cors());


//add a word

app.get('/add/:word/:score', addword);

function addword(request,response){
  var data = request.params;
  var word = data.word;
  var score = Number(data.score);
  var reply;
  if (!score){
      reply = {
        msg: 'score is required'
      }
  } else {
      words[word] = score;
      var data = JSON.stringify(words, null, 2);
      fs.writeFile('words.json',data, finished);
      function finished(err){
        console.log('all set');
      }
      reply = {
        msg: 'thanks for the word'
      }
    }

  response.send(reply);


}

app.get('/all',sendall);

function sendall(request,response){
  response.send(words);
}
