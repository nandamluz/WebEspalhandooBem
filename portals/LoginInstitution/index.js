
import styles from "./login.module.css"
import { useState } from 'react';
import { useRouter } from 'next/router'
import api from "../../pages/api/api"
import Link from 'next/link';
import React, { useContext } from "react";
import Context from "../../components/context/context";
import Maxwidth from"../../components/Maxwidth/maxwidth";



const LoginInstitution = (props) => {
  const [notRegister, setNotRegister] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const router = useRouter()

  const context = useContext(Context)
  
  


  async function register (){
      router.push({
        pathname: '/registerinstitution',
      })
  }
  


  async function loaduser() {
    try {
      const {data} = await api.get(`/institutions?email=${email}&password=${password}`); 
    if(data.length){
      const user = {
        id: data[0].id,
        name: data[0].name,
        email: data[0].email
      }
      context.setUser(user)
      router.push({
        pathname: '/'
      })
    } else {
      setNotRegister(true)
    }
    } catch (error) {
      console.error(error)
    }
    
  
  }

  const inputClassName = notRegister ? styles.inputError : styles.input
    
    return (
    <div className={styles.loginpage}>
      <Maxwidth>
        <div className={styles.back}>
          <Link href="javascript:history.back()">
          <img src="back.png" alt="voltar" width="38px" height="38px" margin-top="50px"/>
          </Link>
        </div> 
        <div className={styles.card}>
          <div className={styles.login}>
            <img src="institution.png" width="560px" height="500px"/>
              <div className={styles.form}>
              <h1>Login</h1>
              <div className={styles.subtitle}>
              <h3> Ainda não tem um cadastro? <button onClick={register}>Cadastre-se</button> </h3>
              </div>
              <input 
                type="email"
                name="email" 
                onChange={(item)=> setEmail(item.target.value)} 
                required="true" 
                placeholder="E-mail"/>
              <input 
                className={inputClassName} 
                value={password} 
                type="password"
                onChange={(item)=> setPassword(item.target.value)}
                placeholder="Senha"
                >
              </input>

              {notRegister && <span className={styles.labelSpanError}> Revise o seu e-mail ou usuário.</span>}

                    <button type="submit" onClick={loaduser} className={styles.enter}>
                      Entrar
                    </button>
                          
              </div>
          </div>
          
        </div>
        </Maxwidth>
    </div>
      )
    }
    
       

export default LoginInstitution;