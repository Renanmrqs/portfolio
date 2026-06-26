import { useState } from "react"


function Footer ( { color } ) {
    const [text, setText] = useState("texto padrao") 
    const [inputText, setInputText] = useState("")
    const [back_color, setBackColor] = useState("pink")
    
    function click() {
        setText(inputText)
    }

    return (
    <div style={{ backgroundColor:back_color}}>
        <p style={{ color:color }}>{text}</p> 
        
        <input value={inputText} onChange={(e) => {setInputText(e.target.value)} } type="text" />

        <button onClick={click}>Change paragraph name</button>
        
        
        
        <button onClick={() => {setBackColor("yellow")}}>Change background color</button>
    
    </div>
)
}

export default Footer