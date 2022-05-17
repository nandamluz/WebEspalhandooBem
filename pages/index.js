import Head from 'next/head'
import Image from 'next/image'
import api from "../pages/api/api"
import Header from '../components/Header'
import styles from '../pages/dashboard.module.css';
import { useState,useEffect } from 'react';
import InstitutionCard from '../components/InstitutionCard';
import { useRouter } from 'next/router'
import { AuthProvider } from '../providers/auth';
import { useContext } from "react/cjs/react.development";
import Context from "../components/context/context";




export default function Home() {
  const [institutions, setInstitutions] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});
  const {user} = useContext(Context)
  const router = useRouter()
 
  
  useEffect(() => {
    loadInstitution();
  }, []);

  async function applyFilter(institutionName) {
    if (!institutionName){
      await loadInstitution()
      return
    }
    const response = await api.get(`/institutions?name=${institutionName}`); 
    console.log('response', response)
    
    setInstitutions(response.data) 
    
  } 
  
  async function loadInstitution() {
    const listInstitution = await api.get("/institutions"); 
    
    setInstitutions(listInstitution.data);
  } 

  function handleDetailPage(institutionId){
   
    router.push({
      pathname: '/infoinstitution',
      query: { institutionId },
    })
  }

  return (
    
    <div className={styles.container}>
      
      <div className={styles.header}>
      <Header 
      list={loadInstitution}
      handleSearch={applyFilter}/>
      </div>

      <div className={styles.cards}>
      {institutions.map((institution)=>{
       return(
         <InstitutionCard 
         data={institution}
         onClick={() => handleDetailPage(institution.id)} 
         key={institution.id}
         />
       )
     })}
      </div> 
     
    </div>
    
  )
}






{/* <footer className={styles.footer}>
<a
href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
target="_blank"
rel="noopener noreferrer"
>
Powered by{' '}
<span className={styles.logo}>
  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
</span>
</a>
</footer> */}