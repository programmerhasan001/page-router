import Link from "next/link";

export default function Navbar() {
    return (
        <div className="py-3 bg-orange-300">
            <ul className="flex">
                <li className="py-2 px-4 mx-2 bg-[#444] text-white">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="py-2 px-4 mx-2 bg-[#444] text-white">
                    <Link href={"/about"}>About</Link>
                </li>
                <li className="py-2 px-4 mx-2 bg-[#444] text-white">
                    <Link href={"/services"}>Services</Link>
                </li>
                <li className="py-2 px-4 mx-2 bg-[#444] text-white">
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="py-2 px-4 mx-2 bg-[#444] text-white">
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}
