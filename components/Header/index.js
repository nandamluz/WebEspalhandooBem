import styles from "./header.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../../pages/api/api"
import { useContext } from "react/cjs/react.development";
import Context from "../context/context";
import Maxwidth from "../Maxwidth/maxwidth";



export default function Header({handleSearch}) {
  const [search, setSearch] = useState('');
  const router = useRouter()
  const {user, setUser} = useContext(Context)

 
    function applySearch (){
      handleSearch(search)
    }

    const logout = () => {
      console.log("logout,")
      setUser({name:"", email:""});
    };

    function refreshPage(){
      window.location.reload();
    } 
    async function loginInstitution (){
      router.push({
        pathname: '/logininstitution',
      })
    }
    async function editInstitution (){
      router.push({
        pathname: '/editinstitution',
      })
    }



    return (
      <div className={styles.container}>
        <Maxwidth>
        <div className={styles.header}>
            <div className={styles.wraplogo}>
              <button className={styles.logo}onClick={refreshPage}><img src="logo.png" width="240px" height="50px"/></button>
            </div>
             
            <div className={styles.buscar}>
                <input 
                type="text" 
                placeholder="Buscar Instituição" 
                onChange={(item)=> setSearch(item.target.value)}/> 
                <button onClick={applySearch} className={styles.searchlogo}> <img src="search.png" width="15px" height="15px"/></button> 
            </div>
                        
            <div className={styles.headerbutton}>
              {user?.name ? <div className={styles.title}> 
            <h1>Olá, {user.name}!</h1>
            
            <span onClick={editInstitution}> <img src="user.png" width="28px" height="25px"/></span> 
            <span onClick={logout}> <img src="logout.png" width="28px" height="25px"/></span>
            
            </div>: 
              <button className={styles.institution} onClick={loginInstitution}>
                Login instituição 
              </button>}
            </div> 
        
        </div>
        </Maxwidth>
      </div>
    )
  }
  