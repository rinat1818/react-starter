const { useEffect, useState } = React
import { booksServis } from "../services/book.service.js"


export function BookEdit() {
    const [book, setBook] = useState(booksServis.getEmptyCar())

    function handleChange({ target }) {
        const { type, name, value } = target
        if(name === "amount") {
            setBook(prev => ({ ...prev, listPrice:{amount:value,currencyCode:"EUR",isOnSale:false}}))
        }
        setBook(prev => ({ ...prev, [name]: type === 'text' ? value : +value }))
    }
    function onSavebook(ev) {
        ev.preventDefault()
        

        booksServis.save(book)
            .then(() => console.log('ssss'))

    }
    return <form onSubmit={onSavebook}>
        <label htmlFor="title">title:</label>
        <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange} />

        <label htmlFor="description">description
        </label>
        <input
            type="text"
            placeholder="description"
            id="description"
            name="description"

            value={book.description
}
            onChange={handleChange} />

        <label htmlFor="amount">amount:</label>
        <input
            type="number"
            placeholder="amount"
            id="amount"
            name="amount"
            value={book.amount}
            onChange={handleChange} />
        <button>save</button>

    </form>

}