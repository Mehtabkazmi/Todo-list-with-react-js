import React from 'react';

const Todolist=(props)=>{
    
    return(<>
        <div className="todo_style">
            <i class="fa fa-times" aria-hidden="true"
             onClick={()=>{
                 props.onSelect(props.id)}
                 }/>
            <li>{props.text}</li>
        </div>
    </>);
}
export default Todolist;