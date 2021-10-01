import { useSelector, shallowEqual } from 'react-redux';
import { Placemark } from 'react-yandex-maps';

import Location from '../components/Location/Location';
import { MAP_ZOOM, LOCALE } from '../variables/variables';

const LocationContainer = () => {
    const { locations } = useSelector((state) => state.content, shallowEqual);
    const locale = useSelector((state) => state.settings.locale);

    const getLinks = (styles) =>
        locations.map((location) => (
            <li key={location.id} className={styles.item}>
                <a href={location.navigator} target="_blanc" className={styles.link}>
                    {locale === LOCALE.ru
                        ? location.title
                        : location.localizations[0].title}
                </a>
            </li>
        ));

    const getMapPlaces = () =>
        locations.map((location) => (
            <Placemark
                key={location.id}
                geometry={[location.location.latitude, location.location.longitude]}
                properties={{
                    hintContent:
            locale === LOCALE.ru
                ? location.description
                : location.localizations[0].description,
                    balloonContent:
            locale === LOCALE.ru
                ? location.description
                : location.localizations[0].description,
                }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            >
                {locale === LOCALE.ru
                    ? location.title
                    : location.localizations[0].title}
            </Placemark>
        ));

    const getMapOptions = () => {
        if (locations.length > 0 && locations[0].location) {
            return {
                center: [
                    locations[0].location.latitude,
                    locations[0].location.longitude,
                ],
                zoom: MAP_ZOOM,
            };
        }
        return {
            center: [55.751574, 37.573856],
            zoom: MAP_ZOOM,
        };
    };

    return (
        <Location
            locale={locale}
            getLinks={getLinks}
            getMapPlaces={getMapPlaces}
            mapOptions={getMapOptions()}
        />
    );
};

export default LocationContainer;
