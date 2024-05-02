const  express = require('express');
const  app = express();
const  bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});




const  knjige = [

{ id:  1, title:  'Veliki Gatsby', author:  'F. Scott Fitzgerald' },

{ id:  2, title:  'Harry Potter', author:  'J.K. Rowling' },

{ id:  3, title:  'Ime Vjetra', author:  'Patrick Ruthfus' }];

app.get('/knjige', (req, res) => {
	res.json(knjige);});

 app.get('/knjige/:id', (req, res) => {
    const  knjiga = knjige.find(b  =>      b.id==parseInt(req.params.id));
    if (!knjiga) {
        return  res.status(404).send('Knjiga nije pronadjena');}
    res.json(knjiga);
});
    

app.post('/knjige', (req, res) => {
	const  book = {
	id:  knjige.length + 1,
	title:  req.body.title,
	author:  req.body.author};
	knjige.push(book);
	res.status(201).send(book);
});

app.put('/knjige/:id', (req, res) => {
	const  book= knjige.find(b  =>  b.id === parseInt(req.params.id));
	if (!book)
		return  res.status(404).send('Knjiga nije pronadjena');
	book.title = req.body.title;
	book.author = req.body.author;
	res.json(knjiga);
});

app.delete('/knjige/:id', (req, res) => {
	const  knjiga = knjige.find(b  =>  b.id === parseInt(req.params.id));
	if (!knjiga)
		return  res.status(404).send('Knjiga nije pronadjena');
	const  index = knjige.indexOf(knjiga);
	knjige.splice(index, 1);
	res.send(knjige);
});

