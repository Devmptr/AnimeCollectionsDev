import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { MainContainer } from "./components/Home/HomeStyle";
import AnimeDetail from "./components/Anime/AnimeDetail/AnimeDetail";
import Collection from "./components/Collections/Collection";
import CollectionDetail from "./components/Collections/CollectionDetail/CollectionDetail";

function NoMatch() {
    return <div>Not Found</div>;
}

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MainContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/collections"
                            element={<Collection/>}
                        />
                        <Route
                            path="/collection/detail/:collectionSlug"
                            element={<CollectionDetail/>}
                        />
                        <Route path="/animes" element={<div>animes</div>} />
                        <Route
                            path="/anime/detail/:animeId"
                            element={<AnimeDetail />}
                        />
                        <Route element={NoMatch()} />
                    </Routes>
                </MainContainer>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
