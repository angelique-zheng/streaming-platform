import { NewRelease } from '../../components/newRelease/NewRelease';
import { Trending } from '../../components/trending/Trending';
import './style.css';

export const Home: React.FC = () => {
    return (
        <main className="home-main">
            <Trending />
            <NewRelease />
        </main>
    );
};
