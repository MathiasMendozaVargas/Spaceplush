import React, { useState } from 'react';
import './Header.css';

function Header() {
    var [ query, setQuery ] = useState();

    return(
        <header>
            <div className="headerContainer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headerTitle">
                            <h1><span className='brandName'>SPACEPLASH</span> / Nasa Image and Video Library</h1>
                            <img className='headerLogo' src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div class="wrap">
                            <form class="example" action="action_page.php">
                                <input id='input_bar' type="text" placeholder="Search.." name="search"/>
                                <button onClick={(e) => {
                                    query = `${document.getElementById('input_bar').value}`;
                                    console.log(query);
                                }} type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;