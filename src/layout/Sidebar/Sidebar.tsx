import React, { useState } from "react";
import { SidebarMenuList } from "../../helpers/helpers";
import { SidebarProps } from "./Sidebar.props";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "./logo.webp";
import { SidebarMenu } from "../../interfaces/sidebar.interface";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
const NavLinks = (): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <>
      {SidebarMenuList.map((list: SidebarMenu) => (
        <Link key={list.id} href={list.route}>
          <a href="#">
            <div
              className={`${
                asPath === list.route ? "text-screamingGreen" : "text-white"
              } flex gap-2 items-center mb-5  hover:text-screamingGreen ml-5`}
            >
              <list.icon className="text-2xl" />
              {list.name}
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className={`${className} pt-10 pl-4 sm:hidden md:block`} {...props}>
        <div className=" mb-10 text-white">
          <Link href="/">
            <a href="" className="flex gap-2 items-center">
              <Image src={Logo} alt="logo" width={50} height={50} />
              <h1 className="text-screamingGreen  text-3xl">Music</h1>
            </a>
          </Link>
        </div>
        <NavLinks />
      </div>
      {/*Mobile version*/}
      <div>
        <div className=" md:hidden right-3 top-2 cursor-pointer z-50 fixed  ">
          {!isMobileMenuOpen ? (
            <HiOutlineMenu
              size={50}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          ) : (
            <RiCloseLine size={50} onClick={() => setIsMobileMenuOpen(false)} />
          )}
        </div>
        <div
          className={`fixed top-0 h-screen w-2/3 flex  flex-col  justify-center smooth-transition z-40  bg-gradient-to-tl backdrop-blur-sbackdrop-blur-smm from-white/10 to-[#483D8B] ${
            isMobileMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
