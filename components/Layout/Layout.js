
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';
import Burger from '../Burger';
import styles from './Layout.module.scss';

const Layout = ({ children, title }) => (
    <>
        <div className={styles.wrapper}>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <Burger />

            <main>
                { children }
            </main>
        </div>

        <div className={styles.footer}>
            <Footer />
        </div>
    </>
);

export default Layout;