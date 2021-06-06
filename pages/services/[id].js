import {
    fetchGlobal, fetchRoutes, fetchServices
} from '../../utils/initialRequests';
import Layout from '../../components/Layout';
import Services from '../../components/Services';

const Home = () => (
    <Layout title="Palatin-a: Главная">
        <section>
            <Services />
        </section>
    </Layout>
);

Home.getInitialProps = async ({ store, query }) => {
    await Promise.all([
        fetchGlobal(store),
        fetchRoutes(store),
        fetchServices(store, query)
    ]);
};


export default Home;