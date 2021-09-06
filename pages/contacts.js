import {
    fetchGlobal, fetchRoutes
} from '../utils/initialRequests';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';

const Home = () => (
    <Layout title="Palatin-a: Контакты" currentUrl="https://palatin-a.com/contacts">
        <section>
            <Contacts />
        </section>
    </Layout>
);

Home.getInitialProps = async ({ store }) => {
    await Promise.all([
        fetchGlobal(store),
        fetchRoutes(store),
    ]);
};


export default Home;