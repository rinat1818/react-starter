const { useState, useEffect } = React


import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { booksServis } from "../services/book.service.js"
import { BookAdd } from "./BookAdd.jsx"
import { BookDetails } from "./BookDetails.jsx"
// import { BookFilter } from "../cmps/BookFilter.jsx"




export function BookIndex() {

    const [books, setBooks] = useState(null)
    // const [selectedbook, setSelectedbook] = useState(null)
    const [filterBy, setFilterBy] = useState(booksServis.getDefaultFilter())
    var test = 0

    useEffect(() => {
        loadBooks()

    }, [])


    function loadBooks() {

        return booksServis.query()
            .then(setBooks)
    }

    function removeBooks(bookId) {
        return booksServis.remove(bookId)
            .then(() => setBooks(prev => prev.filter(book => book.id !== bookId)))
    }

    if (!books) return <div className="loader">

        {/* <img src="./assets/img/loader.svg" alt="" /> */}
    </div>
    return <div className="book-indx">

        {/* { <React.Fragment> } */}

        { <BookFilter
            filterBy={filterBy}
            setFilterBy={setFilterBy} /> }
        <BookAdd />
        <BookList
            books={books}

            onRemoveBook={removeBooks} />

        {/* { </React.Fragment> } */}


    </div>

}

{/* <pre>{JSON.stringify(books,null,3) }</pre> */ }

