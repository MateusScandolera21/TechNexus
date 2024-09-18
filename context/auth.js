import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ Children  }) => {
    const [user, setUser] = useState(); 

    useEffect(() => {
      const userToken = localStorage.getItem("user_token");
      const usersStorage = localStorage.getItem("users_db");

      if (userToken  && usersStorage) {
        const hasUser = JSON.parse(usersStorage)?.filter(
          (user) => user.email === JSON.parse(userToken).email
        );

        if (hasUser) setUser(hasUser[0]);
      }
    },  []);

  //Verificação de email ja cadastrado
  const signin = (email, password) => {
    const usersStorage = JSON.parce(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length){
      if(hasUser[0].email === email  && hasUser[0].password === password){
        const token = Math.ramdom().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringity({ email, token}));
        setUser({ email, password});
        return;
      } else {
        return  "Email ou senha invalidos";
      }
    } else {
      return "Email não cadastrado";
    }
  };

  //Fim da verificação de email ja cadastrado e cadastro  de novo usuario 
  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email ===  email);

    if (hasUser?.lenght) {
      return  "Email já cadastrado";
    }

    let newUser;

    if (usersStorage){
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  }
  //Retorno de valores para utilizar
  return(
    <AuthContext.Provider value={{ user, signed:  !!user, signin, signup, signout }} >
      { Children }
    </AuthContext.Provider>
  );
};


