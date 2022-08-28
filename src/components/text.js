import { useState } from "react";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Text(props) {
  const handlepick = () => {
    let a = text1.toUpperCase();
    setText(a);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const lowercase=()=>{
    let a=text1.toLowerCase();
    setText(a);
  }
  const[iscopied,setIsCopied]=useState(false);
  const copyToClipboard=()=>
  {

    setIsCopied(true);
    setTimeout(()=>
    {
      setIsCopied(false);
    },1000);
    
  };
  const [text1, setText] = useState("");
  const arr = text1.split(" ").filter((element)=>{return element.length!=0});
  let temp=0;
  const removeSpaces=()=>
  {
    let a=text1.replace(/ /g,'');
    setText(a);
  }
  return (
    <div className={`bg-${props.mode} `}>
      <div className="text-center" style={{height:"100vh"}}>
        <h2 className={`text-${(props.mode==="white")?"dark":"white"}`}>
          Hii,<b>{props.name}</b>
        </h2>
        <h2 className={`text-${(props.mode==="white")?"dark":"white"}`}>Enter the text Below </h2>
        <textarea
          className="form-control w-50 mx-auto"
          value={text1}
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary  mx-1 my-3" onClick={handlepick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1  my-3" onClick={lowercase}>
          Convert to lowercase
        </button>
        <CopyToClipboard text={text1}>
        <button className="btn btn-primary mx-1  my-3" onClick={copyToClipboard}>
          {iscopied?"Copied !":"Copy"}
        </button>
        </CopyToClipboard>
        <button className="btn btn-primary mx-1  my-3" onClick={removeSpaces}>
          Remove spaces
        </button>
        <h2 className={`text-${(props.mode==="white")?"dark":"white"}`}>Your text summary is :</h2>
        <h3 className={`text-${(props.mode==="white")?"dark":"white"}`}>
          {arr.length} words , {text1.length} characters
        </h3>
      </div>
    </div>
  );
}
