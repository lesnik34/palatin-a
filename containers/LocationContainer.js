import { useSelector } from 'react-redux'

import Location from '../components/Location/Location'
import { MAP_ZOOM } from '../variables/variables'

const LocationContainer = () => {
    const { locations } = useSelector(state => state.content);

    const getLinks = (styles) => {
        return locations.map(location => (
            <li key={location.id} className={styles['item']}>
                <a href={location.navigator} className={styles['link']}>
                    {location.title}
                </a>
            </li>
        ))
    }

    const getMapPlaces = () => {
        return locations.map(location => ({
                coordinates: [location.latitude, location.longitude],
                description: location.description,
                key: location.id
        }))
    }

    const getMapOptions = () => {
        if (locations.length > 0 && locations[0].latitude) {
            return {
                center: [locations[0].latitude, locations[0].longitude],
                zoom: MAP_ZOOM
            }
        } else {
            return {
                zoom: MAP_ZOOM
            }
        }
    }

    return <Location
        getLinks={getLinks}
        mapPlaces={getMapPlaces()}
        mapOptions={getMapOptions()}
    />
}

export default LocationContainer;