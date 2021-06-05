import classnames from 'classnames';

import styles from './AdvantageItem.module.scss';

const AdvantageItem = (props) => {
    const {
        key,
        title,
        description,
        inViewport,
        forwardedRef
    } = props;

    return (
        <li
            className={classnames(
                styles.item,
                { [ styles.active ]: inViewport },
                { [ styles.hidden ]: !inViewport }
            )}
            ref={forwardedRef}
            key={key}
        >
            <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>

                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
};

export default AdvantageItem;