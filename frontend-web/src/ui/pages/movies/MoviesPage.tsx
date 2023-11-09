import { useEffect, useState } from 'react';
import { Movies } from '../../../models/movie';
import { useFirestore } from '../../../providers/FirestoreProvider';
import { strings } from '../../../res/strings';
import { GenreSelector } from '../../components/genreSelector/GenreSelector';
import { Mosaic } from '../../components/mosaic/Mosaic';
import './style.css';

export const MoviesPage: React.FC = () => {
    const { movies } = useFirestore();
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredData, setFilteredData] = useState<Movies>([]);

    useEffect(() => {
        if (selectedGenre === '') {
            setFilteredData(movies);
        } else {
            const newFilteredData = movies.reduce<Movies>((acc, curr) => {
                if (curr.genres.some(genre => genre === selectedGenre)) {
                    return [...acc, curr];
                }
                return acc;
            }, []);
            setFilteredData(newFilteredData);
        }
    }, [selectedGenre, movies]);

    return (
        <main className="movies-main">
            <h1>{strings.fr.page.movies.moviesArea}</h1>
            <GenreSelector selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <Mosaic contents={filteredData} />
        </main>
    );
};
