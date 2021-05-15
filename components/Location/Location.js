import { Map, Placemark, YMaps } from 'react-yandex-maps'

import styles from './Location'

const Location = (props) => {
    const {
        getLinks,
        mapPlaces,
        mapOptions
    } = props;

    return (
        <div className={styles['main']}>
            <div className='container'>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles['title']}>Наше местоположение</h2>
                </div>

                <p className={styles['text']}>
                    К числу приемуществ нашей компании следует также отнести
                    нашу геопозицию, которая является максимально удобной для
                    заказчика - наши складские помещения находятся в непосредственной
                    близости к порту, что обеспечивает оперативность работы
                </p>

                <div className={styles['path']}>
                    <h3 className={styles['path-title']}>Проложить маршрут:</h3>

                    <ul className={styles['list']}>
                        { getLinks(styles) }
                    </ul>
                </div>

                <div className={styles['map-wrapper']}>
                    <YMaps>
                        <Map defaultState={mapOptions} className={styles['map']}>
                            {
                                mapPlaces.map(place =>
                                    <Placemark
                                        key={place.key}
                                        geometry={place.coordinates}
                                        properties={{
                                            hintContent: place.description,
                                            balloonContent: place.description,
                                        }}
                                        modules={
                                            ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                        }
                                    />)
                            }
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}

export default Location;