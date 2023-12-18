import { useNavigate } from "react-router-dom";
export const Login = () => {
    const myNav = useNavigate()
    const shoot = () => {
        console.log("Great Shot!");
        myNav("/")
      }
    return (
        
        <>
            <h1 className="my-h1">Hii</h1>
            <button className="btn btn-primary" onClick={() => shoot()}>Take the Shot!</button>
        </>
    )
}