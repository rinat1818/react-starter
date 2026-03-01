


const { useState } = React
import { booksServis } from "../services/book.service.js"

export function BookAdd() {

    const [title, setTitle] = useState('')

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
        .then(books=>{

            console.log(books);
        })
        .catch
        
    }

    function onSavebook(ev) {
        ev.preventDefault()


        booksServis.save(book)
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

    </form>
}


