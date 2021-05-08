import Link from 'next/link'

import styles from './Header.module.scss'

const Header = (props) => {
    const {
        toggleHandler
    } = props;

    return (
        <div className={styles['main']}>
            <div className='container'>
                <div className={styles['wrapper']}>
                    <div className={styles['full-logo']}>
                        <Link href='/'>
                            <a className={styles['link']}>
                                <img
                                    src='/img/svg/logo.svg'
                                    alt='Company logo'
                                    className={styles['logo']}
                                />
                            </a>
                        </Link>

                        <Link href='/'>
                            <a className={styles['link']}>
                                <img
                                    src='/img/svg/logo-title.svg'
                                    alt='Logo title'
                                    className={styles['title']}
                                />
                            </a>
                        </Link>
                    </div>

                    <button
                        className={styles.burger}
                        onClick={toggleHandler}
                    >
                        <div className={styles['burger-dot']} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;