const express=require('express');
const port=process.env.PORT || 3300 ;
const app=express();
const nav= [
    {
        link:'./books',name:'Books'
    },
    {
        link:'./authors',name:'Authors'
    },
    {
        link:'./login',name:'Login'
    },
    {
        link:'./signup',name:'Signup'
    }

];

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginroutes')(nav);
const signupRouter=require('./src/routes/signuproutes')(nav);


app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);


app.get('/',function(req,res){
    res.render("index",{
        nav,
       title:'Library'
    });

});






app.listen(port,()=>{
    console.log("SERVER ready at PORT "+port);
});