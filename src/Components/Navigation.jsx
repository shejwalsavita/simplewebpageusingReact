function Navigation(){
    return(
        <>
           <nav className="container">
                <div className="nav-logo">
                    <img src="./public/Images/brand_logo.png" alt="logo-image"/>
                </div>
                <ul>
                   <li href="#">MENU</li>
                   <li href="#">LOCATION</li>
                   <li href="#">ABOUT</li>
                   <li href="#">CONTACT</li>
                </ul>
                <button>Login</button>
            </nav>
        </>
    )
}
export default Navigation;