"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Download from "./DownloadButton";
import Link from "next/link";
import SubstackEmbed from './SubstackEmbed';

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className="justify-between py-14 px-16 text-white md:flex hidden">
        <div className="flex flex-col">
          <p className="font-extrabold">Site Plan</p>
          <ul className="space-y-1 mt-3">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/")}
            >
              Product
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/pricing")}
            >
              Pricing
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/documentation")}
            >
              Documentation
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/team")}
            >
              Team
            </li>
            <li>Downloads</li>
          </ul>
          <div className="flex mt-6 space-x-2">
            <Image src="/images/logo.png" alt="logo" width={150} height={50} />
          </div>
        </div>
        <div className="flex flex-col my-auto px-5">
          <p className="font-bold">Newsletter</p>
          <SubstackEmbed/>
        </div>
        <div className="flex flex-col justify-between">
          <p
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer font-bold underline text-right"
          >
            Return to top
          </p>
          <Download />
        </div>
      </footer>

      <footer className="md:hidden flex flex-col mb-10 w-10/12 mt-10 text-white mx-auto">
        <div className="flex flex-col justify-between ml-auto">
          <p
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer font-bold underline text-right text-base"
          >
            Return to top
          </p>
        </div>
        <div className="flex flex-col my-auto mt-4">
          <p className="font-bold">Newsletter</p>
          <SubstackEmbed/>
        </div>
        <p className="font-extrabold text-base mt-10">Site Plan</p>
        <ul className="space-y-1 mt-3">
          <li
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/")}
          >
            Product
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/pricing")}
          >
            Pricing
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/documentation")}
          >
            Documentation
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/team")}
          >
            Team
          </li>
          <li>Downloads</li>
        </ul>
        <div className="flex space-x-2 mx-auto mt-12">
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={150} height={50} />
          </Link>
        </div>
      </footer>
    </>
  );
}
