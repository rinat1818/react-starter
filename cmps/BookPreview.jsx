export function BookPreview({book}){
    // console.log(book);
    
 return <div>

    <h2>{book.id}</h2>
    <p>{book.title}</p>
    <img src={book.thumbnail} alt="" />
      <p>{book.listPrice.amount}</p>
    
    {/* <p>{book.description}</p> */}
</div>

    }




    {/* <img src={`assets/img/${book.title}.png`} alt="" /> */}
    {/* <p>{book.listPrice.amount}</p> */}
    {/* <p>{book.listPrice.amount}</p> */}
    {/* <p>{book.listPrice?.amount}</p> */}
    {/* <p>{book.listPrice.currencyCode}</p> */}
    {/* <div className="actions">
        <button 
       
         className="btn-remove">x</button>
    </div> */}