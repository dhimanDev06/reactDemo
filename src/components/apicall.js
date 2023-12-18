import { useCallback, useEffect } from "react";
import { useState, useRef } from "react";
import { useAPI } from "../hooks/useApi";
export const ApiCall = () => {

    const [ApiResponse, setResponse] = useState([]);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts')
    const [btnType, setBtnType] = useState('all')
    const {data:commentsRes, loading, errtext} = useAPI('https://jsonplaceholder.typicode.com/commentss');
    console.log("Dhiman a", commentsRes)
    
    const callApi = useCallback(
        async () => {
            const res = await fetch(url);
            const data = await res.json();
            if (url === 'https://jsonplaceholder.typicode.com/posts') {
                setResponse(data)
                setBtnType('all')
            } else {
                setResponse([data])
                setBtnType('single')
            }
        }, [url])

    useEffect(() => {
        /*
        fetch(url)
        .then(response => response.json())
        .then(json =>{
            if(url === 'https://jsonplaceholder.typicode.com/posts'){
                setResponse(json)
                setBtnType('all')
            }else{
                setResponse([json])
                setBtnType('single')
            }})
        */
        


        callApi()
    }, [callApi])

    const showSingle = (id) => {
        console.log(id)
        if (id) {
            setUrl('https://jsonplaceholder.typicode.com/posts/' + id)
        } else {
            setUrl('https://jsonplaceholder.typicode.com/posts')
        }
        // setResponse(ApiResponse.filter((a)=> a.id == id))
    }

    return (
        <>
            <div className="card">
                <h1>
                    API Call { loading && 
                    <span>loading</span>
                    }
                </h1>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {
                                ApiResponse && ApiResponse.map((a) =>
                                    <li key={a.id} className="list-group-item d-flex justify-content-between">
                                        <span className="">
                                            {a.id}
                                        </span>
                                        <span className="">
                                            {a.title}
                                        </span>
                                        <span className="">{
                                            btnType === 'all' &&
                                            <button type="button" onClick={() => showSingle(a.id)} className="btn btn-warning">Remove</button>
                                        }
                                            {
                                                btnType === 'single' &&
                                                <button type="button" onClick={() => showSingle("")} className="btn btn-warning">All</button>
                                            }
                                        </span>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                    <div className="col-md-6">
                        {errtext && 
                        <p>errtext</p>}
                        <ul className="list-group">
                            {
                                commentsRes && commentsRes.map((a) =>
                                    <li key={a.id} className="list-group-item d-flex justify-content-between">
                                        <span className="">
                                            {a.id}
                                        </span>
                                        <span className="">
                                            {a.email}
                                        </span>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}