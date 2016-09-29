var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
Articleone : {
    title: 'Article one: neha chandra',
    heading: 'Article-one', 
    date: 'sep,26',
    content:  `<p> This is my content for my article one</p>
            <p> This is my content for my article one</p>
            <p> This is my content for my article one</p> `
},
Articletwo : { title: 'Article two: neha chandra',
    heading: 'Article-two', 
    date: 'sep,27',
    content:  `<p> This is my content for second article</p>
             `},
Articlethree : { title: 'Article three: neha chandra',
    heading: 'Article-three', 
    date: 'sep,28',
    content:  `<p> This is my content for third article</p>
             `}
};

function createTemplate(data) {
    var title = data.title;
    var heading= data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
    <meta name = "viewport" content = "width= device-width, initial-scale = 1"/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div>
        <div class= "container">
            <a href = "/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>    
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(Articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
