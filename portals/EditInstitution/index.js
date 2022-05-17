import styles from "./edit.module.css"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import api from "../../pages/api/api"
import InputMask from "../../components/Inputs/InputPhone";
import back from "../../public/back.png";
import { useContext } from "react/cjs/react.development";
import Context, { ContextProvider } from "../../components/context/context";
import Maxwidthcopy from"../../components/Maxwidthcopy/maxwidth";




const RegisterInstitution = ({}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [history, setHistory] = useState("");
  const [abstract, setAbstract] = useState("");

  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [cnpj, setCnpj] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user} = useContext(Context)

  useEffect(()=>{
    findId()
  }, [])

 
  async function findId() {
    try { 
      const {data} = await api.get(`/institutions?id=${user.id}`)
      const institution = data[0]
      setName(institution.name)
      setAddress(institution.address)
      setHistory(institution.history)
      setAbstract(institution.abstract)
      setPhone(institution.phone)
      setCnpj(institution.cnpj)
      setUrl(institution.url)
      setEmail(institution.email)





    } catch (error) {
      console.error(error)
    }

  } 


  
  
  async function createAccount() {
    await api.post('/institutions', {name, address, history, abstract, phone, cnpj, url, email, password});
    
  }   

    return (
      
    <div className={styles.registerpage}> 
        <div className={styles.back}>
          <Link href="javascript:history.back()">
          <img src="back.png" alt="voltar" width="38px" height="38px" />        
          </Link>
        </div>
      <div className={styles.titlepage}> 
        <h1>Editar ou atualizar dados</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.form}>
              <input value={name}name="name"onChange={(event)=> setName(event.target.value)} required="true" placeholder="Nome da Instituição"/>
              <input value={address}name="address"onChange={(event)=> setAddress(event.target.value)} required="true" placeholder="Endereço"/>
              <InputMask name="phone" value={phone}type="number" onChange={(event)=> setPhone(event.target.value)} required="true" placeholder="(xx) xxxxx-xxxx"/>
            </div>
            <div className={styles.form}>
              <input value={url}name="url"onChange={(event)=> setUrl(event.target.value)} required="true" placeholder="URL da logo"/>            
              <input value={abstract} name="abstract"onChange={(event)=> setAbstract(event.target.value)} required="true" placeholder="Resumo"/>
              <textarea data-ls-module="charCounter" value={history}maxlength="280" cols="30" rows="5" maxlength="280"name="history"onChange={(event)=> setHistory(event.target.value)}  required="true" placeholder="Nossa história"/>
              <span className={styles.labelSpanMax}> Máximo de 280 caracteres</span>
            </div>
            <div className={styles.form}>
            
              <input name="email" value={email}type="email" placeholder="email@example.com" onChange={(event)=> setEmail(event.target.value)} required="true" />
              <input name="password" type="password" onChange={(event)=> setPassword(event.target.value)} required="true"placeholder="Senha"/> 
              <input name="confirmpassword" type="password" onChange={(event)=> setPassword(event.target.value)} required="true"placeholder="Confirme sua Senha"/>
            </div>
        </div>
      </div>
      <div className={styles.send}>
        <Link href="/">
          <button type="submit"onClick={createAccount}>
            Salvar
          </button>
        </Link>
        </div>
        
   
    </div> 
     
    
    
    )}

export default RegisterInstitution;