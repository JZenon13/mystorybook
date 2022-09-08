import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "../public/src/components/Button";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello There!</h1>
      <p className={styles.text}>Some Cool Words</p>
      <img
        src="https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg"
        alt=""
      ></img>
      <div>
        <Link href="/projects">
          <Button>See project listings</Button>
        </Link>
      </div>
    </div>
  );
}
