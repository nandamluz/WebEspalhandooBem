import styles from "./institutionCard.module.css";
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from "next/link";
import api from "../../pages/api/api"



const InstitutionCard = ({data, onClick}) => {
    
 
  return(
    <div className={styles.container}>
      <div className={styles.card} key={data.id}>
        <div className={styles.left}>
          <div className={styles.photo}>
            <img src={data.url} width="80px" height="80px"/>
          </div> 
          <div className={styles.details}>  
            <h1>{data.name}</h1> 
            <span> {data.abstract}</span>  
          </div>
        </div>
          <button className={styles.options} onClick={onClick}> 
            Doar
          </button>
      </div> 
    </div>
  )
}
export default InstitutionCard;



