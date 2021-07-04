import {
    fetchAdvantages, fetchGlobal, fetchJumbotron,
    fetchLocations, fetchPartners, fetchPreview, fetchRoutes
} from '../utils/initialRequests';
import Jumbotron from '../components/Jumbotron';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import Preview from '../components/Preview';
import Partners from '../components/Partners';
import Location from '../components/Location';

const Home = () => (
    <Layout title="Palatin-a: Главная">
        <section>
            <Jumbotron />
        </section>

        <section>
            <Intro />
        </section>

        <section>
            <Preview />
        </section>

        <section>
            <Partners />
        </section>

        <section>
            <Location />
        </section>
    </Layout>
);

Home.getInitialProps = async ({ store }) => {
    await Promise.all([
        fetchJumbotron(store),
        fetchAdvantages(store),
        fetchPreview(store),
        fetchPartners(store),
        fetchLocations(store),
        fetchGlobal(store),
        fetchRoutes(store)
    ]);
};


export default Home;