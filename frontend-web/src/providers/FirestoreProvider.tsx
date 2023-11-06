import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { GenreRepository } from '../domain/genre/GenreRepository';
import { MovieRepository } from '../domain/movie/MovieRepository';
import { SerieRepository } from '../domain/serie/SerieRepository';
import { ChangeEmitter } from '../io/types';
import { Genres } from '../models/genre';
import { Movies } from '../models/movie';
import { Series } from '../models/serie';

type FirestoreContextType = {
    genres: Genres;
    movies: Movies;
    series: Series;
};

const FirestoreContext = createContext<FirestoreContextType>({
    genres: [],
    movies: [],
    series: []
});

type FirestoreProviderProps = {
    children: ReactNode;
};

const genreRepository = new GenreRepository();
const movieRepository = new MovieRepository();
const serieRepository = new SerieRepository();

const updateState = <T,>(prevState: T[], newData: ChangeEmitter<T>[]): T[] => {
    const updatedState = [...prevState];
    newData.forEach(value => {
        switch (value.type) {
            case 'added':
                updatedState.splice(value.newIndex, 0, value.data);
                break;
            case 'removed':
                updatedState.splice(value.oldIndex, 1);
                break;
            case 'modified':
                updatedState.splice(value.oldIndex, 1);
                updatedState.splice(value.newIndex, 0, value.data);
                break;
        }
    });
    return updatedState;
};

export const FirestoreProvider: React.FC<FirestoreProviderProps> = ({ children }) => {
    const [genres, setGenres] = useState<Genres>([]);
    const [movies, setMovies] = useState<Movies>([]);
    const [series, setSeries] = useState<Series>([]);

    useEffect(() => {
        const genresUnsubscribe = genreRepository.watchGenres(values => {
            if (values instanceof Error) {
                console.error(values);
                return;
            }
            setGenres(prevGenres => updateState(prevGenres, values));
        });
        const moviesUnsubscribe = movieRepository.watchMovies(values => {
            if (values instanceof Error) {
                console.error(values);
                return;
            }
            setMovies(prevMovies => updateState(prevMovies, values));
        });
        const seriesUnsubscribe = serieRepository.watchSeries(values => {
            if (values instanceof Error) {
                console.error(values);
                return;
            }
            setSeries(prevSeries => updateState(prevSeries, values));
        });
        return () => {
            genresUnsubscribe();
            moviesUnsubscribe();
            seriesUnsubscribe();
        };
    }, []);
    return <FirestoreContext.Provider value={{ genres, movies, series }}>{children}</FirestoreContext.Provider>;
};

export const useFirestore = () => useContext(FirestoreContext);
