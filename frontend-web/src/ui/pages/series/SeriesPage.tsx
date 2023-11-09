import { useEffect, useState } from 'react';
import { Series } from '../../../models/serie';
import { useFirestore } from '../../../providers/FirestoreProvider';
import { strings } from '../../../res/strings';
import { GenreSelector } from '../../components/genreSelector/GenreSelector';
import { Mosaic } from '../../components/mosaic/Mosaic';
import './style.css';

export const SeriesPage: React.FC = () => {
    const { series } = useFirestore();
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredData, setFilteredData] = useState<Series>([]);

    useEffect(() => {
        if (selectedGenre === '') {
            setFilteredData(series);
        } else {
            const newFilteredData = series.reduce<Series>((acc, curr) => {
                if (curr.genres.some(genre => genre === selectedGenre)) {
                    return [...acc, curr];
                }
                return acc;
            }, []);
            setFilteredData(newFilteredData);
        }
    }, [selectedGenre, series]);

    return (
        <main className="series-main">
            <h1>{strings.fr.page.series.seriesArea}</h1>
            <GenreSelector selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <Mosaic contents={filteredData} />
        </main>
    );
};
