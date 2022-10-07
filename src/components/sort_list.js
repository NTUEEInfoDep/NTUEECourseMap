import React, { useState } from "react"




const Sort_list = ()=>{
  const sort_name = ["等第 ","學期 ","推文數 "];
  const [sortType , setSortType] = useState(["forward","-","-"]);
  const handleClick = (i) => {
    let new_sortType =  sortType.slice();
    if(sortType[i] === "forward"){
      new_sortType[i] = "backward";
    }else if(sortType[i] === "backward"){
      new_sortType[i] = "forward";
    }else{
      new_sortType = ["-","-","-"];
      new_sortType[i] = "forward"
    }
    setSortType(new_sortType);
  }
  const sortTypeToText = (Type) => {
    if(Type === "forward"){
      return "v";
    }else if(Type === "backward"){
      return "^";
    }else{
      return "-";
    }
  }
  return (<div>
    <h1>排列</h1>
    <button onClick = {()=>{handleClick(0)}}>{sort_name[0]+sortTypeToText(sortType[0])}</button>
    <button onClick = {()=>{handleClick(1)}}>{sort_name[1]+sortTypeToText(sortType[1])}</button>
    <button onClick = {()=>{handleClick(2)}}>{sort_name[2]+sortTypeToText(sortType[2])}</button>
    </div>)
}

export default Sort_list
