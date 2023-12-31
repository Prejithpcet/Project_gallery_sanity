import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Generated by Sanity + Next Js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-5xl mx-auto py-[20px] flex justify-between items-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-3xl font-bold"
          >
            Project Gallery
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            <Link href="/" className="hover:underline hover:text-blue-400">
              Home
            </Link>
            {pages.map((page) => (
              <Link
                className="hover:underline hover:text-blue-400"
                href={`/${page.slug}`}
                key={page._id}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="min-h-screen">
          <div className="absolute -z-10">
            <Image
              src="/bgIMG.png"
              alt="bg"
              width={1520}
              height={960}
              className="max-w-full min-h-screen"
            />
          </div>
          {children}
        </main>
        <footer className="py-16 bg-black text-gray-100">
          <div className="flex flex-col">
            <div className="flex justify-center items-center gap-6">
              <a
                href="https://prejith-portfolio.netlify.app/"
                className="hover:text-blue-200 hover:scale-110 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgProfile />
              </a>
              <a
                href="https://www.linkedin.com/in/prejith-p-980704203/"
                className="hover:text-blue-200 hover:scale-110 text-xl font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Prejithpcet"
                className="hover:text-blue-200 hover:scale-110 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.quickfolio.me/prejithp-contact"
                className="hover:text-blue-200 hover:scale-110 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.quickfolio.me/prejithp-contact"
                className="hover:text-blue-200 hover:scale-110 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="flex flex-col pt-8">
              <span className="flex justify-center items-center italic font-semibold text-sm">
                Copyright &copy; 2023 by Prejith P
              </span>
              <span className="flex justify-center items-center text-xs">
                Made with Sanity Io
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
