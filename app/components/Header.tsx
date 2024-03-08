import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <Link href='/'>
        <h1 className="font-bold text-xl text-center">HOME</h1>
      </Link>
    </header>
  );
};

export default Header;
