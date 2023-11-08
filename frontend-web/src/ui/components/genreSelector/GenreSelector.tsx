import { useCallback } from 'react';
import { useFirestore } from '../../../providers/FirestoreProvider';
import { strings } from '../../../res/strings';
import './style.css';

type GenreSelectorProps = {
    selectedGenre: string;
    setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
};

export const GenreSelector: React.FC<GenreSelectorProps> = ({ selectedGenre, setSelectedGenre }) => {
    const { genres } = useFirestore();

    const selectGenre = useCallback(
        (genre: string) => {
            setSelectedGenre(genre);
        },
        [setSelectedGenre]
    );

    return (
        <section className="genres-selector-container">
            <p>{strings.fr.components.genreSelector.sortByGenre}</p>
            <li key="-1" className={selectedGenre === '' ? 'active' : ''} onClick={() => selectGenre('')}>
                {strings.fr.components.genreSelector.all}
            </li>
            {genres.map(genre => {
                return (
                    <li
                        key={genre.id}
                        className={selectedGenre === genre.name ? 'active' : ''}
                        onClick={() => selectGenre(genre.name)}
                    >
                        {genre.name}
                    </li>
                );
            })}
        </section>
    );
};
