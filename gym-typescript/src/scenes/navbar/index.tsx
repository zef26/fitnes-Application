import { useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png"


type Props = {}

const Navbar = (props: Props) => {
    const flexBeetwen = "flex items-center justify-between"
  return (
    <nav >
        <div
        className={`${flexBeetwen} fixed top-0 z-30 w-full py-6 bg-white`}
        >
            <div className={`${flexBeetwen} mx-auto w-5/6`}>
                <div className={`${flexBeetwen} w-full gap-16`}>
                    <img src={Logo} alt="logo" />
                    <div className={`${flexBeetwen} w-full`}>
                    <div className={`${flexBeetwen} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our Classes</p>
                        <p>Contact Us</p>

                    </div>
                    <div className={`${flexBeetwen} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a member</button>
                    </div>

                    </div>

                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar