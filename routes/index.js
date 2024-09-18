import { Fragment } from "react"
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from  "../pags/Home";
import Signin from  "../pags/Signin";
import Signup from  "../pags/Signup";
import useAuth from "../hooks/useAuth";

// para a entrar na pagina Home sera necessario fazer o login ou criar uma conta 
const Private = ({ Item }) => {
  const signed = useAuth();

  return signed > 0 ? <item /> : <Signin />;
};

const RoutesApp = ()  => {  
  return (
    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route exact path="/Home" element={<Private Item={Home} />} /> 
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </Fragment>
  </BrowserRouter>
  );
};

export default RoutesApp;
