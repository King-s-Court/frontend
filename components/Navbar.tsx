import {Fragment} from "react";
import Link from "next/link";
import logo from '/public/kingscourt.svg';
import Image from "next/image";
import Button, {ButtonVariant} from "@/components/Button";

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
                        <Link className={'subtitle navbar-link'} href={'/game'}>Play</Link>
                        <Link className={'subtitle navbar-link'}  href={'/profile'}>Profile</Link>
                    </div>
                </div>
                <Button variant={ButtonVariant.primary}>
                    Login
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;

