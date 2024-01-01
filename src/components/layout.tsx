import '../app/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from './header'
import Footer from './footer'
import Navbar from './navbar';

export default function Layout({ children }: any) {
    return (
        <div className='font-hwt-artz'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}