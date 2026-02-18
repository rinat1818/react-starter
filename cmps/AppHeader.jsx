export function AppHeader({ page = 'home', onSetPage }) {

    return <header className="app-header full main-layout">
        <section className="header-container">
            <h1>books</h1>
            <nav>
                <a href="#" className={(page === 'home') ? 'active' : ''}
                    onClick={(ev) => onSetPage('home')}>
                    HomePage
                </a>
                <span> | </span>
                <a href="#" className={(page === 'about') ? 'active' : ''}
                    onClick={(ev) => onSetPage('about')}>
                    AboutUs
                </a>
                <span> | </span>
                <a href="#" className={(page === 'book') ? 'active' : ''}
                    onClick={(ev) => onSetPage('book')}>
                    BookIndex
                </a>
            </nav>
        </section>
    </header>
}
