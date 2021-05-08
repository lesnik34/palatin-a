
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../Header'

const Layout = ({ children, title }) => {
    const { asPath } = useRouter();

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <main>
                { children }
            </main>
        </>
    )
}

export default Layout;