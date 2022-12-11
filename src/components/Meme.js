import '../index.css'
export default function Meme(){

    function logConsole(){
        console.log("Clicked")
    }
    return (
       
            <div className='form' >
                <input type="text" className="meme-input"/>
                <input type="text" className="meme-input"/>
                <button  onClick={logConsole}  className='form-button'>Get a new meme image</button>
            </div>
            
        
    )
}