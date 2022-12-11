import '../index.css'
import trollface from '../images/troll.png'
export default function Navbar(){
    return (
            <header className='header'>
                <div className="nav-title">
                    <img src={trollface} width="31.31px" height="26.22px" ></img>  
                    <h3 id="title">Meme Generator</h3>
                </div>
                <h3 id="nav-subtitle">React course- Project 3</h3>
            </header>
    
    )
}