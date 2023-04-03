import {Fragment} from "react";
import Link from "next/link";
import logo from '/public/kingscourt.svg';
import Image from "next/image";
const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={'container navbar-container'}>
                <div className={'navbar-left'}>
                    <Fragment>
                        <Link href={'/'}>
                            <div className={'navbar-logo-container'}>
                                <Image src={logo} alt={'logo'}/>
                            </div>
                        </Link>
                    </Fragment>
                    <div className={'navbar-left__menu'}>
                        <Link className={'subtitle navbar-link'} href={'/play'}>Play</Link>
                        <Link className={'subtitle navbar-link'}  href={'/profile'}>Profile</Link>
                    </div>
                </div>
                <div className={'navbar-right'}>
                    Login
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

