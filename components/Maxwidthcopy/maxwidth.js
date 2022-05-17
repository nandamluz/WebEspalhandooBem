import styles from '../Maxwidthcopy/width.module.css';


export default function Maxwidthcopy(props) {
    

    return(
      <div className={styles.container}>
        {props.children}
      </div>
    )
}

