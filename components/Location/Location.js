import { YMaps, Map } from 'react-yandex-maps';

import styles from './Location.module.scss';

const Location = (props) => {
    const {
        getLinks,
        getMapPlaces,
        mapOptions
    } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles['title-wrapper']}>
                        <h2 className={styles.title}>Наше местоположение</h2>
                    </div>

                    <p className={styles.text}>
                        К числу приемуществ нашей компании следует также отнести
                        нашу геопозицию, которая является максимально удобной для
                        заказчика - наши складские помещения находятся в непосредственной
                        близости к порту, что обеспечивает оперативность работы
                    </p>

                    <div className={styles.path}>
                        <h3 className={styles['path-title']}>Проложить маршрут:</h3>

                        <ul className={styles.list}>
                            { getLinks(styles) }
                        </ul>
                    </div>

                    <div className={styles['map-wrapper']}>
                        <YMaps>
                            <Map
                                defaultState={mapOptions}
                                className={styles.map}
                                width="100%"
                                height="100%"
                            >
                                { getMapPlaces() }
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;