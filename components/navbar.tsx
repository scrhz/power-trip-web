import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Power Trip Productions</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/audio">Audio</Link>
      <Link href="/products">Hire</Link>
    </nav>
  );
};

export default NavBar;
