import { useRouter } from 'next/router';
import {
    fetchGlobal, fetchRoutes, fetchServices
} from '../../utils/initialRequests';
import Layout from '../../components/Layout';
import Services from '../../components/Services';

const Home = () => {
    const { query } = useRouter();

    return (
        <Layout title="Palatin-a: Главная" currentUrl={`https://palatin-azov.ru/services/${query.id}`}>
            <section>
                <Services />
            </section>
        </Layout>
    )
};

Home.getInitialProps = async ({ store, query }) => {
    await Promise.all([
        fetchGlobal(store),
        fetchRoutes(store),
        fetchServices(store, query)
    ]);
};


export default Home;