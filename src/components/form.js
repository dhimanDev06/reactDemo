import { useState, useRef } from "react";
export const Form = () => {
    const [userList, setList] = useState([])
    const [formVal, setVal] = useState({
        email:"",
        password:""
    })
    const emailRef = useRef("")
    const passRef = useRef("")

    const getValue = (e) =>{
        setVal({...formVal,
            email:emailRef.current.value
        })
    }    
    const getValue1 = (e) =>{
        setVal({...formVal,
            password:passRef.current.value
        })
    }
    const submitAction = (event)=>{
        event.preventDefault();
        const unicNum = Math.floor(Math.random() * 10000)
        if(formVal.email && formVal.password){
            setList([...userList,{
                uid: unicNum,
                email:formVal.email,
                password:formVal.password
            }])
            console.log("setList",userList, formVal);
            resetForm()
        }
    }
    const resetForm = () =>{
        setVal({
            email:"",
            password:""
        })
        emailRef.current.value = "";
        passRef.current.value = ""
    }
    const deleteaction = (uid) =>{
        console.log(uid)
        setList(userList.filter((a)=>a.uid!=uid))
    }
    return (
        <>
            <div className="row">
            <h1>From Form</h1>
            <div className="col-12 d-flex justify-content-center">
                <form onSubmit={submitAction}>
                <div className="mb-3">
                    <label className="form-label">Email address  {emailRef.current.value}</label>
                    <input onChange={getValue} ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onChange={getValue1} ref={passRef} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="button" onClick={resetForm} className="btn btn-warning">Reset</button>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {/* {formVal.email}
            {formVal.password} */}
            <ul className="list-group">
                {
                 userList.map((a)=>
                    <li key={a.uid} className="list-group-item d-flex justify-content-between">
                        <span className="">
                        {a.uid}
                        </span>
                        <span className="">
                        {a.email} {a.password}
                        </span>
                        <span className="">
                            <button type="button" onClick={()=>deleteaction(a.uid)} className="btn btn-warning">Remove</button>
                        </span>
                    </li>
                 )   
                }
                
            </ul>
            </div>
        </>
    )
}