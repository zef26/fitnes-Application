import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import { select } from "framer-motion/client";
import Link from "./Link";
import type { SelectedPage } from "@/shared/types";

type Props = {
     selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBeetwen = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBeetwen} fixed top-0 z-30 w-full py-6 bg-white`}>
        <div className={`${flexBeetwen} mx-auto w-5/6`}>
          <div className={`${flexBeetwen} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            <div className={`${flexBeetwen} w-full`}>
              <div className={`${flexBeetwen} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} />
                <Link page="Our Classes" selectedPage={selectedPage} />
                <Link page="Contact Us" selectedPage={selectedPage}/>
              </div>
              <div className={`${flexBeetwen} gap-8`}>
                <p>Sign In</p>
                <button className="rounded-full bg-secondary-500 py-2 px-5 cursor-pointer ">
                  Become a member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
