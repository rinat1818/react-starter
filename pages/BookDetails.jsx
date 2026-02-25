// import { booksServis } from "../services/book.service"
const {Link} =ReactRouterDOM
import { booksServis } from "../services/book.service.js"

const{useParams}=ReactRouterDOM 
const { useState, useEffect } = React

export function BookDetails(){
      const [ book, setbook ] = useState(null)
    // const params =useParams()
    const params = useParams()

    useEffect(() => {
         booksServis.get(params.id)
             .then(setbook)
     }, [params.id])


    if (!book) return <div className="loader">

        {/* <h1>hhh</h1> */}
    </div>
    // console.log(book);
    
return <article className='book-list'>

<h2>{book.id}</h2>
    <p>{book.title}</p>
    <p>{book.description}</p>
    <img src={book.thumbnail} alt="" />
    {/* <img src={`assets/img/${book.title}.png`} alt="" /> */}
    <p>{book.listPrice.amount}</p>
    <p>{book.listPrice.currencyCode}</p>
 <nav>
   <Link to={`/book/${book.prevCarId}`}> <button>Prev</button></Link>
   <Link to={`/book/${book.nextCarId}`}> <button>Next</button></Link>
   <Link to="/book"> <button>Back</button></Link>
   </nav>
</article>
}