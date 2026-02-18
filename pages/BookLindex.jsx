const { useState, useEffect } = React


import { BookList } from "../cmps/BookList.jsx"
import { booksServis } from "../services/book.service.js"



export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()

    }, [])


    function loadBooks() {

        return booksServis.query()
            .then(setBooks)
    }

    if (!books) return <div className="loader">

        {/* <img src="./assets/img/loader.svg" alt="" /> */}
    </div>
    return <div className="book-indx">
       <BookList books={books}/>
        {/* <pre>{JSON.stringify(books,null,3) }</pre> */}

    </div>

}


