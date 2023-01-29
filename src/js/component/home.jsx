import React from "react";
import { useState  } from "react";
import '../../styles/index.css';
//include images into your bundle

const Home=()=>{
    const[todo , SetTodo] = useState("");
    const[update , SetUpdate] = useState([])

    const HandleCase=(e)=>{
        SetTodo(e.target.value)
    }
 //insert the data
    const Insert_Data=(e)=>{
        e.preventDefault();
        if( todo === ""){
            alert("please, Enter the to-do to to ")
        }else{
            SetUpdate(update =>[...update , todo])
            SetTodo('') 
            console.log(update)
        }
     }
   
//Delete to-do
const Delete_Todo=(id)=>{
    // console.log(id)
   const newList= update.filter(( item , index)=> index !==  id);
    SetUpdate(newList);
   // console.log(update)
}

    
    return (
        <div className="col-12 h-100"  >
            <h1>TODOS</h1>
            <div className="container" style={{ height:"1000px", width:"1000px", margin:'auto'}}>
                    <div className=" d-flex justify-content-center text-center bg-transparent">
                        <input  className="form-control w-50 m-1" 
                        type="text" 
                        value={todo} 
                        onChange={HandleCase}
                        placeholder="Add To Dos"
                        />
                        <button type="submit" className="btn btn-light" onClick={Insert_Data} >Add</button>
                    </div>
                    <div className=" d-flex justify-content-center text-left bg-transparent ">
                        <ul className="list-group list-group-flush w-50 bg-transparent">
                            {update.map((todo , index)=>
                                
                                        <li key={index}  className="list-group-item bg-transparent" >
                                            {todo}
                                            <button type="button"  className="btn btn-info float-end nuevoBoton bg-transparent"
                                            onClick={() => Delete_Todo( index)}>
                                                X
                                            </button>                   
                                        </li>                
                                )}                                 
                        </ul>    
                    </div>  
                    <div className="d-flex justify-content-center mt-3">
                         <h6>You Have to-dos to do  {update.length}</h6>       
                    </div>
                            
            </div>                      
        </div>
        );
        
}

export default Home;
