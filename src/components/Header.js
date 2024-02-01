import React from "react";
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import searchLogo from '../assets/searchLogo.png';

function Header() {
    const [searchVal, setSearchVal] = React.useState('')
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setSearchVal(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        navigate(`/${searchVal}`);
    }

    function logoHandler() {
        navigate('/all');
    }

    return (
        <div className="Header">
            <img src={logo} alt='Background' className="Header-Logo" onClick={logoHandler}></img>
            <div className="Header-Title"></div>
            <div className="search-container">
                <form onSubmit={searchHandler}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="Header-search"
                        onChange={handleNameChange}
                        value={searchVal}
                    />
                    <button type="submit" className="Search-btn">
                        <img alt='Background' src={searchLogo} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header;
