import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FirestoreProvider } from './providers/FirestoreProvider';
import { SideBar } from './ui/components/sideBar/SideBar';
import { MovieDetails } from './ui/pages/details/MovieDetails';
import { SerieDetails } from './ui/pages/details/SerieDetails';
import { HomePage } from './ui/pages/home/HomePage';
import { MoviesPage } from './ui/pages/movies/MoviesPage';
import { SeriesPage } from './ui/pages/series/SeriesPage';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <SideBar />
            <FirestoreProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/series" element={<SeriesPage />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="/series/:id" element={<SerieDetails />} />
                </Routes>
            </FirestoreProvider>
        </BrowserRouter>
    );
};
