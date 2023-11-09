import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FirestoreProvider } from './providers/FirestoreProvider';
import { MovieDetails } from './ui/components/details/MovieDetails';
import { SideBar } from './ui/components/sideBar/SideBar';
import { Home } from './ui/pages/home/Home';
import { MoviesPage } from './ui/pages/movies/MoviesPage';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <SideBar />
            <FirestoreProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                </Routes>
            </FirestoreProvider>
        </BrowserRouter>
    );
};
