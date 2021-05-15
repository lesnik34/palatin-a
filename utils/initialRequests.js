import {
    getJumbotron, getPreview, getAdvantages, getPartners, getPositions
} from '../api/graphcms'

import {
    setJumbotron, setPreview, setAdvantages, setPartners, setLocations
} from '../store/slices/content'

export const fetchJumbotron = async (store) => {
    const jumbotron = store.getState().content.jumbotron;

    if (Object.keys(jumbotron).length === 0) {
        const fetchedJumbotron = await getJumbotron();
        store.dispatch(setJumbotron(fetchedJumbotron));
    }
}

export const fetchAdvantages = async (store) => {
    const advantages = store.getState().content.advantages;

    if (advantages.length === 0) {
        const fetchedAdvantages = await getAdvantages();
        store.dispatch(setAdvantages(fetchedAdvantages));
    }
}

export const fetchPreview = async (store) => {
    const previews = store.getState().content.previews;

    if (previews.length === 0) {
        const fetchedPreview = await getPreview();
        store.dispatch(setPreview(fetchedPreview));
    }
}

export const fetchPartners = async (store) => {
    const partners = store.getState().content.partners;

    if (partners.length === 0) {
        const fetchedPartners = await getPartners();
        store.dispatch(setPartners(fetchedPartners))
    }
}

export const fetchLocations = async (store) => {
    const locations = store.getState().content.locations;

    if (locations.length === 0) {
        const fetchedLocations = await getPositions();
        store.dispatch(setLocations(fetchedLocations));
    }
}