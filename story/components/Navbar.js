import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">Developer List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Project Listings</a>
      </Link>
    </nav>
  );
};

export default Navbar;
