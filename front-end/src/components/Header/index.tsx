import Image from "next/image";

import logo from "@/assets/images/logo-mac.svg"

export function Header() {
    return (
        <header>
            <Image src={logo} alt="logo-mac" />
        </header>
    )
}