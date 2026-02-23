const { useState } = React

import { AppHeader } from "./cmps/AppHeader.jsx"
import {HomePage } from "./pages/Home.jsx"
import { AboutUs } from "./pages/About.jsx"
import { BookIndex } from "./pages/BookLindex.jsx"
// import { BookIndex } from "./pages/BookLindex.jsx"
// import {  } from "./pages/BookLindex.jsx"
export function RootCmp() {
    const [page, setPage] = useState('book')
    
    return <section className="app main-layout">
        <AppHeader page={page} onSetPage={setPage} />
        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
      
}