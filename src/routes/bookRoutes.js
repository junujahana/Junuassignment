const express=require('express');
const booksRouter=express.Router();
function router(nav){

    var books=[
    
        {
                title:'Mickey Mouse',
                author:'Walt Disney',
                genre:'cartoon',
                img:"Mickey.jpg"
        },
        {
            title:'Harry Potter',
            author:'J. K. Rowling',
            genre:'Fantasy',
            img:"harry.jpg"
        },
        
        {
            title:'Aadujeevitham',
            author:'Benyamin',
            genre:'novel',
            img:"aadu.jpg"
        }
        
        ]
        
        booksRouter.get('/',function(req,res){
            res.render("books",{
                nav,
               title:'Library',
               books
            });
        
        });
        booksRouter.get('/:id',function(req,res){
            const id = req.params.id
            res.render('book',{
                nav,
                title:'Library',
                book:books[id]
            });
        });


        return booksRouter;
}




    module.exports=router;