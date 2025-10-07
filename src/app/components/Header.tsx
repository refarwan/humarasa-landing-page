import Link from "next/link";
import { HamburgerIcon } from "./Icons";

const Header = () => {
    return (
        <header className="h-[73px] w-full flex items-center justify-between px-[24px]">
            <Link href="/" className="text-warna-1 font-bold text-[20px]">
                Humarasa
            </Link>
            <button>
                <HamburgerIcon size={36} className="text-warna-1" />
            </button>
        </header>
    );
};

export default Header;
