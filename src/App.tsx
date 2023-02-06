import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutPage from './Pages/About';
import CharacterPage from './Pages/Character';
import CharactersPage from './Pages/Characters';
import HomePage from './Pages/Home';
import NotFound from './Pages/NotFound';

const App: React.FunctionComponent = () => {
    return (
        <main className="main-wrap">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="characters">
                    <Route index element={<CharactersPage />} />
                    <Route path=":id" element={<CharacterPage />} />
                </Route>
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default App;
