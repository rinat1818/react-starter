const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM




import { AppHeader } from "./cmps/AppHeader.jsx"
import { HomePage } from "./pages/Home.jsx"
import { AboutUs } from "./pages/About.jsx"
import { BookIndex } from "./pages/BookLindex.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"
import { BookAdd } from "./pages/BookAdd.jsx"
// import { BookIndex } from "./pages/BookLindex.jsx"
// import {  } from "./pages/BookLindex.jsx"
export function RootCmp() {

   

    return (
        < Router>
            <section className="app main-layout">
                <AppHeader/>
                <main>
                    <Routes>
                       

                        <Route path="/" element ={<HomePage />}/>
                        <Route path="/about" element ={<AboutUs />}/>
                        <Route path="/book" element ={<BookIndex />}/>
                        <Route path="/book/edit" element ={<BookEdit/>}/>
                        <Route path="/book/add" element ={<BookAdd/>}/>
                        <Route path="/book/:id" element ={<BookDetails/>}/>

                    </Routes>
                </main>
            </section>
        </Router>
    )
}