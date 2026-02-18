export function BookPreview({book}){
 return <li>

    <h2>{book.id}</h2>
    <p>{book.title}</p>
    <p>{book.description}</p>
    <img src={book.thumbnail} alt="" />
    {/* <img src={`assets/img/${book.title}.png`} alt="" /> */}
    <p>{book.listPrice.amount}</p>
    <p>{book.listPrice.currencyCode}</p>
    <div className="actions">
        <button className="btn-remove">x</button>
    </div>

</li>
}