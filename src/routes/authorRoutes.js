const express=require('express');

const authorRouter=express.Router();
function router(nav){
    var authors=[
    
        {
                title:'Walt Disney',
                author:'Mickey Mouse',
                genre:'cartoon',
                img:"walt.jpg"
        },
        {
            title:'J. K. Rowling',
            author:'Harry Potter',
            genre:'Fantasy',
            img:"jk.jpg"
        },
        
        {
            title:'Benyamin',
            author:'Aadujeevitham',
            genre:'novel',
            img:"beny.jpg"
        }
        
        ]
    
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
           title:'Library',
           authors
        });
    });
    
    
    
    
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });

    return authorRouter;
}




module.exports=router;