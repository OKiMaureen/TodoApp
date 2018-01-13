
//requiring body-parser module
let bodyParser = require('body-parser');

//requiring mongoose
let mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test@ds143030.mlab.com:43030/todoapp');

//create a schema - this is like a blueprint
let todoSchema = new mongoose.Schema({
    item = String
});

//create model
let Todo = mongoose.model('Todo', todoSchema);

//creating item in database
let itemOne = Todo({item:'collect books'}).save(err=>{
    if (err) throw err;
    console.log('item saved successfully');

}) 

//creating dummy data
let data = [{ item: 'call me' }, { item: 'eat food' }, { item: 'read book' }, { item: 'sing song' }];

let urlencodedParser = bodyParser.urlencoded({ extended: false });

//exporting  todoController module
module.exports = (app) => {

    // using the http method to get index page on server    
    app.get('/todo', (req, res) => {
        res.render('pages/index', { todos: data });
    });

    // using the http post method to sumbit form and update data on server
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        
        res.json(data);
    });

    // using the http delete method to delete data from serfver
    app.delete('/todo/:item', (req, res) => {
     data = data.filter((todo)=>{
         return todo.item.replace(/ /g, '-') !==req.params.item;
     });
     res.json(data);
    });
}
