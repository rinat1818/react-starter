import { BookPreview } from "./BookPreview.jsx";


  export function BookList({books}){
return <section className="book-list">
            <ul className="fluid-grid">
                {books.map(book => <BookPreview book={book} key={book.id}/>)}
            </ul>

        </section>
}