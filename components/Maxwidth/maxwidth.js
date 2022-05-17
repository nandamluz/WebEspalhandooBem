import styles from '../Maxwidth/width.module.css';


export default function Maxwidth(props) {
    

    return(
      <div className={styles.container}>
        {props.children}
      </div>
    )
}

