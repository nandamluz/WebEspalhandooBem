import styles from "./info.module.css"
import { useRouter } from 'next/router'
import api from "../../pages/api/api"
import { useEffect, useState } from "react"
import Link from 'next/link';


const InfoInstitution = () => {
  const [institution, setInstitution] = useState({})
  const router = useRouter()


  console.log('router', router)

  useEffect(()=>{
    findInstitution()
    
  }, [])

  async function findInstitution() {
  try { console.log(router.query.institutionId)
    const {data} = await api.get(`/institutions?id=${router.query.institutionId}`)
    
    setInstitution(data[0])
    
  } catch (error) {
    console.error(error)
    
  }
  }


    return(
      <div className={styles.container}>
        <div className={styles.back}>
          <Link href="javascript:history.back()">
          <img src="back.png" alt="voltar" width="38px" height="38px" margin-top="50px"/>
          </Link>
        </div> 
        
          <div className={styles.photo}>
              <img src={institution?.url} width="80px" height="80px"/>
            </div> 
          <div className={styles.card} key={institution?.id}>
            <h1>{institution?.name}</h1> 
            <h3> {institution?.address}</h3> 
            <span> {institution?.history}</span>  
            <p>Para doar: {institution?.phone} </p>
        
          </div> 
      </div>
    )
  }
  export default InfoInstitution;
