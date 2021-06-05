
import Head from 'next/head';
import handleViewport from 'react-in-viewport';

import Header from '../Header';
import Footer from '../Footer';
import Burger from '../Burger';
import styles from './Layout.module.scss';

const Layout = ({ children, title }) => {
    const ViewportBlock = handleViewport(Footer, { rootMargin: '-50px' });
    return (
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
                <ViewportBlock />
            </div>
        </>
    );
};

export default Layout;