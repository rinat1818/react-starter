
const{NavLink}= ReactRouterDOM 

export function AppHeader() {

    return <header className="app-header full main-layout">
        <section className="header-container">
            <h1>books</h1>
            <nav>
             <NavLink to="/">home</NavLink>
             <NavLink to="/about">about</NavLink>
             <NavLink to="/book">book</NavLink>
            </nav>
        </section>
    </header>
}
