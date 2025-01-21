import "@/styles/globals.css";

import Image from "next/image";
import logo from "@/assets/images/logo-mac.svg";

export function Header() {
    return (
        <header className={`art:p-02 mac-bg-yellow-01`}>
            <Image src={logo} alt="logo-mac" priority={true} />
        </header>
    )
}