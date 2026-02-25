const { useState} = React


export function BookFilter({filterBy}) {
    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)


    function handleChange(ev){
           const { type, value} = ev.target
           console.log(type,value);
           
 setFilterByToEdit(prev => ({...prev,txt: value}))
            // { ...prev, [name]: type === 'text' ? value : +value }))
   
    }
   
    return <section className="book-filter">

        <p>serch</p>
        <input
        value={filterByToEdit.txt}
        onInput={ev => handleChange(ev)}
            type="text"
            placeholder="title" />
        {/* <input
        value={filterByToEdit.minSpeed}
        onInput={ev => handleChange(ev)}
            type="nu"
            placeholder="vendor" /> */}

    </section>
}