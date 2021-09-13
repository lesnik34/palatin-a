import { memo } from "react";
import cln from "classnames";
import imageLoader from "../../utils/imageLoader";
import { Parallax } from "react-scroll-parallax";

import styles from "./PreviewItem.module.scss";

const PreviewItem = (props) => {
  const { vision, preview, openHandler, closeHandler, forwardedRef, settings } =
    props;

  return (
    <li className={`${styles.item}`} key={preview.id} ref={forwardedRef}>
      <div className={`${styles["item-wrap"]} ${styles[vision.viewport]}`}>
        <h3
          className={cln(
            styles["item-title"],
            styles[vision.type],
            styles[vision.status]
          )}
          onClick={openHandler}
        >
          {preview.title}
        </h3>

        <Parallax className={styles.parallax} y={[-9, 9]}>
          <div className={cln(styles["item-image-wrap"], styles[vision.type])}>
            <div className={styles["item-image"]}>
              <img
                src={imageLoader(preview.image?.url, settings)}
                className={styles.image}
                alt="Наши услуги"
              />
            </div>

            <div
              className={cln(
                styles["item-overlay"],
                styles[vision.type],
                styles[vision.status]
              )}
              onClick={closeHandler}
            />
          </div>
        </Parallax>

        <p
          className={cln(
            styles["item-text"],
            styles[vision.type],
            styles[vision.status]
          )}
        >
          {preview.description}
        </p>

        <button
          type="button"
          className={cln(
            styles["item-close"],
            styles[vision.type],
            styles[vision.status]
          )}
          onClick={closeHandler}
        />

        <button
          type="button"
          className={cln(
            styles["item-button"],
            styles[vision.type],
            styles[vision.status]
          )}
          onClick={openHandler}
        >
          Подробнее
        </button>
      </div>
    </li>
  );
};

export default memo(PreviewItem);
