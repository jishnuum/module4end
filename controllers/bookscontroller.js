let books = [{title:"Think and Grow Rich",author:"Napoleon Hill",price:"749"},
             {title:"Wise & Otherwise",author:"Sudha Murthy",price:"250"}
]



const adding = (req,res)=>{
    try {

        console.log(req.body);
        books.push(req.body)
        res.status(201).json({message:"books added succesfully",books})
  
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message || "internal server error"})
    }

}

const listBooks = (req,res)=>{
    try {
        res.status(200).json({message:"books listed",books})

        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message || "internal server error"})
  
    }
}

const deleteBooks = (req,res) =>{
    try {
        const {title} = req.params
        // console.log("books id",id);
        const newBooks = books.filter((book)=>book.title !== title)
        console.log(newBooks);
        
        res.status(200).json({message:"books deleted succesfully",newBooks})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message || "internal server error"})

        
    }

}

const listOneBook = (req,res)=>{
    try {
        const {title} = req.params
        const newbook = books.filter((book)=>book.title == title)
        res.status(200).json({message:"books listed",newbook})

        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message || "internal server error"})
  
    }
}

module.exports = {
    adding,
    listBooks,
    deleteBooks,
    listOneBook
}