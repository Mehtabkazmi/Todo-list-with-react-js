import React, { useState } from 'react';
import Todolist from './Todolist';
const App1=()=>{
    const [inputlist,setinputlist]=useState();

    const [items,setitems]=useState([]);

    const itemEvent=(e)=>{
        setinputlist(e.target.value);
    }
    const listOfItems=(oldItems)=>{
        setitems((oldItems)=>{
            return [...oldItems,inputlist];
        });
        setinputlist("");
    };

    const deleteItems=(id)=>{
        setitems((oldItems)=>{
            return oldItems.filter((ArrElem,index)=>{
                return index !== id;
            })
        });
    }
return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List </h1>
            <br />
            <input type="text" value={inputlist} placeholder="Add Items" onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>

            <ol>
            {
            items.map((itemvalue,index)=>{
                return <Todolist key={index} id={index} text={itemvalue} onSelect={deleteItems} />
            })
            }
            </ol>
        </div>
    </div>
    </>
);
}
export default App1;