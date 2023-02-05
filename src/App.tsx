import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutPage from './Pages/About';
import CharacterPage from './Pages/Character';
import CharactersPage from './Pages/Characters';
import HomePage from './Pages/Home';

export type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <main className="main-wrap">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="characters">
                        <Route index element={<CharactersPage />} />
                        <Route path=":id" element={<CharacterPage />} />
                    </Route>
                    <Route path="about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
