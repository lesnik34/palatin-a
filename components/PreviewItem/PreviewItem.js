import cln from 'classnames'
import { Parallax } from 'react-scroll-parallax'

import styles from './PreviewItem.module.scss'

const PreviewItem = (props) => {
    const {
        openHandler,
        closeHandler,
        preview,
        rightClass,
        visionClass,
        image
    } = props;

    return (
        <li className={cln(styles['item'], styles[rightClass])} key={preview.id}>
            <div className={styles['item-wrap']}>
                <h3
                    className={cln(
                        styles['item-title'],
                        styles[rightClass],
                        styles[visionClass]
                    )}
                    onClick={openHandler}
                >
                    {preview.title}
                </h3>

                <Parallax className={styles['parallax']} y={[-9, 9]}>
                    <div className={cln(styles['item-image-wrap'], styles[rightClass])}>
                        <div
                            className={styles['item-image']}
                            style={{ backgroundImage: `url('${image}')` }}
                        />

                        <div
                            className={cln(
                                styles['item-overlay'],
                                styles[rightClass],
                                styles[visionClass]
                            )}
                            onClick={closeHandler}
                        />
                    </div>
                </Parallax>

                <p
                    className={cln(
                        styles['item-text'],
                        styles[rightClass],
                        styles[visionClass]
                    )}
                >
                    {preview.description}
                </p>

                <button
                    className={cln(
                        styles['item-close'],
                        styles[visionClass],
                        styles[visionClass]
                    )}
                    onClick={closeHandler}
                />

                <button
                    className={cln(
                        styles['item-button'],
                        styles[rightClass],
                        styles[visionClass]
                    )}
                    onClick={openHandler}
                >
                    Подробнее
                </button>
            </div>
        </li>
    )
}

export default PreviewItem;