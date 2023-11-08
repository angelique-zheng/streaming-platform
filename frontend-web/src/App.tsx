import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FirestoreProvider } from './providers/FirestoreProvider';
import { SideBar } from './ui/components/sideBar/SideBar';
import { Home } from './ui/pages/home/Home';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <SideBar />
            <FirestoreProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </FirestoreProvider>
        </BrowserRouter>
    );
};
