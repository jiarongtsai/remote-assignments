class App extends React.Component{
    state = {
        toggleMainText: false,
        showMenu: false,
        showBox: true
    }

    handleMainText=()=>{
        this.setState({
            toggleMainText: !this.state.toggleMainText
        })
    }

    handleMenu=()=>{
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
                <Header 
                    handleMenu={this.handleMenu}
                    showMenu={this.state.showMenu}
                />               
                <Welcome 
                    toggleMainText={this.state.toggleMainText}
                    handleMainText={this.handleMainText}
                />
                <Content
                    showBox={this.state.showBox}
                    handleBoxShow={this.handleBoxShow}
                />
                <Footer />
            </div>
        )
    }   
}

const Header=(props)=>{
    return(
        <header>
            <nav>
                <a href="/" className="nav-logo">Web Title / Logo</a>

                <input type="checkbox" id="hamburger" onClick={props.handleMenu}/>
                <label htmlFor="hamburger">{props.showMenu ? "×":"≡"}</label>

                <ul className={props.showMenu ? "nav-links":"nav-links display-none"}>
                    <NavItem number={1}/>
                    <NavItem number={2}/>
                    <NavItem number={3}/>
                    <NavItem number={4}/>
                </ul>
            </nav>       
        </header>
    )
}

const NavItem=(props)=>{
    return(
        <li className="nav-item"><a href="/">item {props.number}</a></li>
    )
}

const Welcome =(props)=>{
    if(props.toggleMainText){
        return(
            <section className="welcome">
                <h1 onClick={props.handleMainText}>Welcome Message</h1>
            </section>
        )
    }else{
        return(
            <section className="welcome">
                <h1 onClick={props.handleMainText}>Have a good day</h1>
            </section>
        )
    }
}

const Content=(props)=>{
    return(
        <section className="content">
            <h2>Section Title</h2>
            <div className={props.showBox ? "content-box-wrapper":"content-box-wrapper display-none"}>
                <Box number={1}/>
                <Box number={2}/>
                <Box number={3}/>
                <Box number={4}/>
            </div>
            <button 
                id = "showContentBox" 
                onClick={props.handleBoxShow}>
                    Toggle Boxes Show
            </button>
        </section>
    )
}

const Box=(props)=>{
    return(
        <div className="content-box">
            <p>Content Box {props.number}</p>
        </div>
    )
}


const Footer=()=>{
    return(
        <footer>
            <p><small>Developed with love by Bella &copy 2022</small></p>
        </footer>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
