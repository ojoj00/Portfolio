import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Oskar<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*Desktop nav */}
        <div className="hidden xl:flex items-ceter gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me </Button>
          </Link>
        </div>

        {/*Mobile Nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
