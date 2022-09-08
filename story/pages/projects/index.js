import styles from "../../styles/Projects.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { projects: data },
  };
};

const Project = ({ projects }) => {
  return (
    <div>
      <h1>All Projects</h1>
      {projects.map((project) => (
        <Link href={"/project/" + project.id} key={project.id}>
          <a className={styles.single}>
            <h3>{project.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Project;
