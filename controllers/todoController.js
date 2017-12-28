//creating dummy data
const data =[{item:'call me'},{item:'eat food'},{item:'read book'}];

//requiring body-parser module
const bodyParser = require('body-parser');


const urlencodedParser = bodyParser.urlencoded({extended:false});

//exporting  todoController module
module.exports =(app)=>{

// using the http method to get index page on server    
app.get('/todo',(req,res)=>{
res.render('pages/index',{todos:data});
});

// using the http post method to sumbit form and update data on server
app.post('/todo', (req,res)=>{

});

// using the http delete method to delete data from serfver
app.delete('/todo', (req,res)=>{

});
}
