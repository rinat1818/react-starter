


const { useState } = React
import { booksServis } from "../services/book.service.js"
import { utilService } from "../services/util.service.js";

export function BookAdd() {

    const [title, setTitle] = useState('')
    const [books, setBooks] = useState([])
    console.log(books, 'books');


    function handleChange({ target }) {
        console.log(target);

        const { type, name, value } = target
        console.log(value);
        setTitle(value)

        // if (name === "amount") {
        //     setBook(prev => ({ ...prev, listPrice: { amount: value, currencyCode: "EUR", isOnSale: false } }))
        // }
        // setBook(prev => ({ ...prev, [name]: type === 'text' ? value : +value }))
    }
    async function onSearch(ev) {
        ev.preventDefault()
        const res = booksServis.fetchBooks(title)
            .then(books => {
                console.log(books);
                setBooks(books)
            })
            .catch(err => {
                console.log(err);

            })
        // console.log(res, 'hello');


    }

    function onSavebook(ev, book) {
        ev.preventDefault()
        // let currAmount = 0
        // if(book.saleInfo.listPrice && book.saleInfo.listPrice.amount){
        //     currAmount = book.saleInfo.listPrice.amount
        // }
        // else {
        //     currAmount =  utilService.getRandomIntInclusive(9,500)
        // }
        const bookForSave = {
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            listPrice: {
                amount: utilService.getRandomIntInclusive(9,500),
                currencyCode: "EUR",
                isOnSale: false
            }
        }
      
        booksServis.save(bookForSave)
            .then(() => console.log('ssss'))

    }


    return <form onSubmit={onSearch}>
        <label htmlFor="title">title:</label>
        <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
        />
        <button>Search</button>

        {books.length > 0 && books.map((book,idx) => {
            return <div key={idx}>
                <p>{book.volumeInfo.title}</p>
                <button onClick={(ev) => onSavebook(ev, book)}>+</button>
            </div>
        })}

    </form>
}


