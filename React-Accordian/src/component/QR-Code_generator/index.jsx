import { useState } from "react"
import QRCode from "react-qr-code"
import "./index.css"
const QCode = () => {
    const [qrCodeValue,setQrCodeValue] = useState('');
    const [inputValue,setInputValue]=useState('');
    const handleInput = ()=>{
        setQrCodeValue(inputValue);
        
    }

  return (
    <div className="main-t">
        <h1>Qr-Code-Generator</h1>
        <div className="qr">
            <input onChange={(e)=>setInputValue(e.target.value)} type="text" name="usertext" value={inputValue} placeholder="Enter your value" />
            <button disabled={inputValue && inputValue.trim()!== ''?false:true} onClick={()=>handleInput()} >Generate qr-code</button>
        </div>
        <div>
            <QRCode id="qr-code-value"
            value={qrCodeValue}/>
        </div>
    </div>
  )
}

export default QCode;