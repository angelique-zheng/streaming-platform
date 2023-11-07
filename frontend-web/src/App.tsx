import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SideBar } from './ui/components/sideBar/SideBar';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <SideBar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
