import { useState , useEffect} from "react"

export const useAPI = (url) => {

    const [data, setData] = useState(null);
    const [loading, showLoader] = useState(false)
    const [errorText, setError] = useState("")
    useEffect(()=>{
        const apiRun = async ()=>{
            showLoader(true)
            try {
                const res = await fetch(url);
                if(!res.ok){
                    setError(res.statusText)
                }
                console.log("Dhiman 1",res);
                const result = await res.json();
                showLoader(false)
                setData(result);
            } catch (error) {
                showLoader(false)
                console.log("Dhiman ",error)
                setData(null);
            }

            console.log("Dhiman data",data)

        }
        apiRun();
    },[url]);
    return {data:data,loading:loading,errtext:errorText}
}