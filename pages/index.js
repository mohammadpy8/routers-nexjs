import styles from '../styles/Home.module.css';
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {

  const router = useRouter();
  const clickHandler = () => {
    // console.log("click on it!")
    router.push("/students")
  }

  return (
    <div className={styles.container}>
      <h1>mohammad</h1>
      <ul>
        <li>
          <Link href="/courses">go to courses</Link>
        </li>
        <li>
          <button onClick={clickHandler}>Login</button>
        </li>
      </ul>
    </div>
  )
}
