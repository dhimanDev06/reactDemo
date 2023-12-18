import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Header } from "./components/common/header";
import {Footer } from "./components/common/footer";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { Registration } from "./components/registration";
import { NoPage } from "./components/noPage";
import { Admin } from "./components/admin";
import { Count} from "./components/count";
import { TaskList } from "./components/tasklist";
import { Form } from "./components/form"
import { ApiCall } from "./components/apicall"
// import './app.html';
const AppA = ()=>{
// function AppA() {
  const user = false;
  const test = {
    name:"dhiman",
    id:6
  }
  const userTest = ()=>{
    return user
  }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="Registration" element={<Registration />} ></Route>
        <Route path="Count" element={<Count />} ></Route>
        <Route path="apicall" element={<ApiCall/>}></Route>
        <Route path="form" element={<Form/>}></Route>
        <Route path="task" element={<TaskList title={test} />}></Route>
        <Route path="admin" element={userTest() ? <Admin/> : <Navigate to="/login"></Navigate>}></Route>
        <Route path="*" element={<NoPage />} ></Route>
        
      </Routes>
      <Footer/>
    </div>
  );
}



export default AppA;
