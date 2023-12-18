import { useState } from "react";
import { Taskcard } from "./taskcard";
export const TaskList = (props) => {
    const data = props.title
    const [tasks,tasksState] = useState([
        {id:123, name:"Dhiman", show:true},
        {id:124, name:"Susmita", show:false},
        {id:125, name:"Suman", show:true},

        {id:111, name:"Baban", show:false}
    ])
    const deletTask = (indx)=>{
        console.log("deletTask",indx,add(3,5));
        tasksState(tasks.filter((a)=>a.id!=indx))
    }
    const add = (a,b)=>{
        return a+ b;
    }
    const [flags,todo] = useState(false)
    const checkFlag = ()=>{
        console.log(flags)
        todo(!flags)
    }
    // function deletTask(indx) {
    //     console.log("deletTask",indx);
    // }
    return (
        <div>
          {/* <ul>
                { tasks.map((t)=> !t.show &&
                    <li key={t.id}>
                        <p>
                        {t.name}
                        </p>
                        <button onClick={()=>deletTask(t.id)}>Delete</button>
                    </li>
                )}
                
            </ul> */
            
        }
            <h1>TaskList {data.name}</h1>  
            <button className="btn btn-danger" onClick={()=>checkFlag()} >Show {flags}</button> 
            {
                flags &&
                <ul className="list-group">
                {
                    tasks.map((t)=>  t.show && 
                <Taskcard  key={t.id} task={t} func={deletTask}/>
                /*
                <li key={t.id}>
                            <p>
                            {t.name}
                            </p>
                            <button onClick={()=>deletTask(t.id)}>Delete</button>
                        </li>
                        */
                    )
                }
                </ul>
            }
 
        </div>
        
    )


}