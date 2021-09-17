import { YMaps, Map } from 'react-yandex-maps';

import { LOCALE } from '../../variables/variables';
import styles from './Location.module.scss';

const Location = (props) => {
    const { getLinks, getMapPlaces, mapOptions, locale } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles['title-wrapper']}>
                        <h2 className={styles.title}>
                            {locale === LOCALE.ru ? 'Наше местоположение' : 'Our location'}
                        </h2>
                    </div>

                    <p className={styles.text}>
                        {locale === LOCALE.ru
                            ? 'К числу преимуществ нашей компании следует также отнести нашу геопозицию, которая является максимально удобной для  заказчика - наши складские помещения находятся в непосредственной близости к порту, что обеспечивает оперативность работы'
                            : 'The advantages of our company should also include our geolocation, which is as convenient as possible for the customer - our warehouses are located in close proximity to the port, which ensures operational efficiency.'}
                    </p>

                    <div className={styles.path}>
                        <h3 className={styles['path-title']}>{locale === LOCALE.ru ? 'Проложить маршрут:' : 'Get directions:'}</h3>

                        <ul className={styles.list}>{getLinks(styles)}</ul>
                    </div>

                    <div className={styles['map-wrapper']}>
                        <YMaps>
                            <Map
                                defaultState={mapOptions}
                                className={styles.map}
                                width="100%"
                                height="100%"
                            >
                                {getMapPlaces()}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
