const App =()=>{
    return(
        <div className="body">
            <header>
                <nav>
                    <a href="/" className="nav-logo">Web Title / Logo</a>

                    <input type="checkbox" id="hamburger"/>
                    <label htmlFor="hamburger">&equiv;</label>

                    <ul className="nav-links display-none">
                        <li className="nav-item"><a href="/">item 1</a></li>
                        <li className="nav-item"><a href="/">item 2</a></li>
                        <li className="nav-item"><a href="/">item 3</a></li>
                        <li className="nav-item"><a href="/">item 4</a></li>
                    </ul>
                </nav>       
            </header>

            <section className="welcome">
                <h1>Welcome Message</h1>
            </section>

            <section className="content">
                <h2>Section Title</h2>
                <div className="content-box-wrapper">
                    <div className="content-box">
                        <p>Content Box 1</p>
                    </div>
                    <div className="content-box">
                        <p>Content Box 2</p>
                    </div>
                    <div className="content-box">
                        <p>Content Box 3</p>
                    </div>
                    <div className="content-box">
                        <p>Content Box 4</p>
                    </div>
                </div>
                <button id = "addContentBox">Add a Content Box</button>
                <hr />
                <button id = "showContentBox">Show More Boxes</button>
                <div className="content-box-wrapper display-none">
                    <div className="content-box">
                        <p>Content Box 1</p>
                    </div>
                    <div className="content-box">
                        <p>Content Box 2</p>
                    </div>
                    <div className="content-box">
                        <p>Content Box 3</p>
                    </div>
                    <div className="content-box">
                        <p>Content Box 4</p>
                    </div>
                </div>
            </section>
            
            <footer>
                <p><small>Developed with love by Bella &copy 2022</small></p>
            </footer>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
