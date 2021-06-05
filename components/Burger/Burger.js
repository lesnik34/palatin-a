import {CSSTransition} from 'react-transition-group';

import styles from './Burger.module.scss';

const Burger = (props) => {
    const {
        vision
    } = props;

    return (
        <CSSTransition
            in={vision}
            unmountOnExit
            mountOnEnter
            classNames={{
                enterActive: styles['anim-enter'],
                enterDone: styles['anim-enter-done'],
                exitActive: styles['anim-exit'],
                exitDone: styles['anime-exit-done']
            }}
            timeout={{
                enter: 500,
                exit: 300
            }}
        >
            <div className={styles.burger}>
                <div className="container">
                    <div className={styles.wrapper}>

                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Burger;