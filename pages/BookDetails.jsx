export function BookDetails({book,onClearSelectBook}){
return <article className='book-list'>

<h2>{book.id}</h2>
    <p>{book.title}</p>
    <p>{book.description}</p>
    <img src={book.thumbnail} alt="" />
    {/* <img src={`assets/img/${book.title}.png`} alt="" /> */}
    <p>{book.listPrice.amount}</p>
    <p>{book.listPrice.currencyCode}</p>

<button onClick={onClearSelectBook}>back</button>
</article>
}