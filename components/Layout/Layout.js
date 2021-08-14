import { useSelector, shallowEqual } from 'react-redux';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';
import Burger from '../Burger';
import styles from './Layout.module.scss';

const Layout = ({ children, title, currentUrl }) => {
    const global = useSelector(state => state.content.global, shallowEqual);

    return (
        <>
            <div className={styles.wrapper}>
                <Head itemscope itemtype="http://schema.org/WPHeader">
                    <title itemProp="headline">{title}</title>
                    <link rel="canonical" href={currentUrl} />

                    <meta name="title" content={global.metaTitle} />
                    <meta itemProp="description" name="description" content={global.metaDescription} />
                    <meta itemProp="keywords" name="keywords" content={global.metaKeywords} />

                    <meta property="og:type" content="website" key="ogtype" />
                    <meta property="og:title" content={global.ogTitle} key="ogtitle" />
                    <meta property="og:description" content={global.ogDescription} key="ogdesc" />
                    <meta property="og:image" content={global.ogImage?.url} key="ogimage" />
                    <meta property="og:url" content={currentUrl} key="ogurl" />
                    <meta property="og:site_name" content="Palatin-a" key="ogsitename" />

                    <link rel="apple-touch-icon" sizes="57x57" href="fav/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="fav/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="fav/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="fav/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="fav/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="fav/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="fav/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="fav/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="fav/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="fav/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="fav/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="fav/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="fav/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="robots" content="all" />
                    <meta name="msapplication-TileImage" content="fav/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#000000" />
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
};

export default Layout;