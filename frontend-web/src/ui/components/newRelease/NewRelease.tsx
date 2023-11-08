import { useMemo } from 'react';
import { useFirestore } from '../../../providers/FirestoreProvider';
import { strings } from '../../../res/strings';
import { Mosaic } from '../mosaic/Mosaic';
import './style.css';

export const NewRelease: React.FC = () => {
    const { movies, series } = useFirestore();
    const contents = useMemo(() => {
        return [...movies, ...series].sort((a, b) => {
            return b.releaseDate - a.releaseDate;
        });
    }, [movies, series]);

    return (
        <section className="new-release-container">
            <h1>
                <a href="/home#newRelease">{strings.fr.components.newRelease.newRelease}</a>
            </h1>
            <Mosaic contents={contents} />
        </section>
    );
};
