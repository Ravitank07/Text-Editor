import React, { useState } from 'react'
export default function TextForm(prop) {
    const clickToUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickToLwCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clickToRemove = () =>{
        let newText = "";
        setText(newText);
    }
    const clickToCopy = () =>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter The Text")
    return (
        <>
            <div className="container my-5">
                <h3>Enter The Text Want to Apper</h3>
                <textarea rows="8" className='form-control p-3 my-4' value={text} column="3" onChange={handleOnChange} placeholder='Enter The Text' id='myBox'></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={clickToUpCase}>UpperCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={clickToLwCase}>Lower Case</button>
                <button className='btn btn-primary my-3 mx-2' onClick={clickToRemove}>Remove All</button>
                <button className='btn btn-primary my-3 mx-2' onClick={clickToCopy}>Copy All Text</button>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} the charachter</p>
            <p>{0.008 * text.split(" ").length} minutes for Human Read</p>
            <h5>PreView</h5>
            <p>{text}</p>
            </div>
        </>
    )
}
