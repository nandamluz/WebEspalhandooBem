import styles from "./register.module.css"
import Link from 'next/link';
import { useState } from 'react';
import api from "../../pages/api/api"
import InputMask from "../../components/Inputs/InputPhone";
import Maxwidthcopy from"../../components/Maxwidthcopy/maxwidth";





const RegisterInstitution = () => {
  const [name, setName] = useState(true);
  const [address, setAddress] = useState(true);
  const [history, setHistory] = useState(true);
  const [abstract, setAbstract] = useState(true);

  const [phone, setPhone] = useState(true);
  const [url, setUrl] = useState(true);
  const [cnpj, setCnpj] = useState(true);

  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

 

  
  
  async function CreateAccount() {
    await api.post('/institutions', {name, address, history, abstract, phone, cnpj, url, email, password});
    
  }   

    return (
      
    <div className={styles.registerpage}> 
    <Maxwidthcopy>
        <div className={styles.back}>
          <Link href="javascript:history.back()">
          <img src="back.png" alt="voltar" width="38px" height="38px" />        
          </Link>
        </div>
      <div className={styles.titlepage}> 
        <h1>Cadastro da Instituição</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.form}>
              <input name="name"onChange={(item)=> setName(item.target.value)} required="true" placeholder="Nome da Instituição"/>
              <input name="address"onChange={(item)=> setAddress(item.target.value)} required="true" placeholder="Endereço"/>
              <InputMask name="phone" type="number" onChange={(item)=> setPhone(item.target.value)} required="true" placeholder="(xx) xxxxx-xxxx"/>
            </div>
            <div className={styles.form}>
              <input name="url"onChange={(item)=> setUrl(item.target.value)} required="true" placeholder="URL da logo"/>            
              <input  name="abstract"onChange={(item)=> setAbstract(item.target.value)} required="true" placeholder="Resumo"/>
              <textarea data-ls-module="charCounter" maxlength="280" cols="30" rows="5" maxlength="280"name="history"onChange={(item)=> setHistory(item.target.value)}  required="true" placeholder="Nossa história"/>
              <span className={styles.labelSpanMax}> Máximo de 280 caracteres</span>
            </div>
            <div className={styles.form}>
            
              <input name="email" type="email" placeholder="email@example.com" onChange={(item)=> setEmail(item.target.value)} required="true" />
              <input name="password" type="password" onChange={(item)=> setPassword(item.target.value)} required="true"placeholder="Senha"/> 
              <input name="confirmpassword" type="password" onChange={(item)=> setPassword(item.target.value)} required="true"placeholder="Confirme sua Senha"/>
            </div>
        </div>
      </div>
      <div className={styles.send}>
        <Link href="/">
          <button type="submit"onClick={CreateAccount}>
            Cadastrar
          </button>
        </Link>
        </div>
        
    </Maxwidthcopy>
   
    </div> 
     
    
    
    )}

export default RegisterInstitution;