import {
    fetchGlobal, fetchRoutes, fetchServices
} from '../../utils/initialRequests';
import Layout from '../../components/Layout';

const Home = () => (
    <Layout title="Palatin-a: Главная">
        <section>
            qw
        </section>
    </Layout>
);

Home.getInitialProps = async ({ store, query }) => {
    await Promise.all([
        fetchGlobal(store),
        fetchRoutes(store),
        fetchServices(store)
    ]);
};


export default Home;