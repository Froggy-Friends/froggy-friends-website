import '../app/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from './header'
import Footer from './footer'

export default function Layout({ children }: any) {
    return (
        <html className='font-hwt-artz'>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}