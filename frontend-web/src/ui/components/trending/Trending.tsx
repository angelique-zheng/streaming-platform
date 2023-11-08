import { useMemo } from 'react';
import { useFirestore } from '../../../providers/FirestoreProvider';
import { strings } from '../../../res/strings';
import { Cinematography } from '../../../utils/types';
import { Carousel } from '../carousel/Carousel';
import './style.css';

export const Trending: React.FC = () => {
    const { movies, series } = useFirestore();
    const contents = useMemo(() => {
        return [...movies, ...series].reduce<Cinematography[]>((acc, curr) => {
            if (curr.trending) {
                acc.push(curr);
            }
            return acc;
        }, []);
    }, [movies, series]);

    return (
        <section className="trending">
            <h1>{strings.fr.components.trending.spotlight}</h1>
            <Carousel contents={contents} />
        </section>
    );
};
