import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        {/* Logo + All Rights - Container */}
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={118}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 20203 <br />
            All rights reserved &copy:
          </p>
        </div>
        {/*FooterLinks*/}
        <div className="footer__links">
          {footerLinks.map((fLink, idx) => (
            <div className="footer__link" key={`${fLink.title}_${idx + 1}`}>
              <h3 className="font-bold">{fLink.title}</h3>
              {fLink.links.map((link, i) => (
                <Link
                  className="text-gray-500"
                  key={`${link.title}_${i + 1}`}
                  href={link.url}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
