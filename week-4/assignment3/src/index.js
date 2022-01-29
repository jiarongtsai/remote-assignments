class App extends React.Component{
    state = {
        toggleMainText: false,
        showMenu: false,
        showBox: true
    }

    handleMainTextChange=()=>{
        this.setState({
            toggleMainText: !this.state.toggleMainText
        })
    }

    handleMenuChange=()=>{
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    handleBoxShow=()=>{
        this.setState({
            showBox: !this.state.showBox
        })
    }

    render(){
        return(
            <div className="body">
                <header>
                    <nav>
                        <a href="/" className="nav-logo">Web Title / Logo</a>

                        <input type="checkbox" id="hamburger" onClick={this.handleMenuChange}/>
                        <label htmlFor="hamburger">{this.state.showMenu ? "×":"≡"}</label>

                        <ul className={this.state.showMenu ? "nav-links":"nav-links display-none"}>
                            <li className="nav-item"><a href="/">item 1</a></li>
                            <li className="nav-item"><a href="/">item 2</a></li>
                            <li className="nav-item"><a href="/">item 3</a></li>
                            <li className="nav-item"><a href="/">item 4</a></li>
                        </ul>
                    </nav>       
                </header>

                <Welcome 
                    toggleMainText={this.state.toggleMainText}
                    handleMainTextChange={this.handleMainTextChange}
                />
                
                <section className="content">
                    <h2>Section Title</h2>
                    <div className={this.state.showBox ? "content-box-wrapper":"content-box-wrapper display-none"}>
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
                    <button id = "showContentBox" onClick={this.handleBoxShow}>Toggle Boxes Show</button>
                </section>
                
                <footer>
                    <p><small>Developed with love by Bella &copy 2022</small></p>
                </footer>
            </div>
        )
    }   
}


const Welcome =(props)=>{
    if(props.toggleMainText){
        return(
            <section className="welcome">
                <h1 onClick={props.handleMainTextChange}>Welcome Message</h1>
            </section>
        )
    }else{
        return(
            <section className="welcome">
                <h1 onClick={props.handleMainTextChange}>Have a good day</h1>
            </section>
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
