import Album from "./Albums";
import Detailalbum from "./Detailalbum";
import DetailGenres from "./DetailGenres";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
<<<<<<< HEAD
            <Route path="/album" element={<Album />} />
            <Route path="/albums/:id" element={<Detailalbum />} />
            <Route path="/artiste" element={<Artiste />} />
            <Route path="/artists/:id" element={<Detailartiste />} />
            <Route path = "/genres" element = {<Genres />} />
=======
            <Route path = "/recherche" element = {<Recherche />} />
            <Route path = "/album" element = {<Album />} />
            <Route path = "/genres" element = {<Genres />} />
            <Route path = "/artiste" element = {<Artiste />} />
            <Route path = "/album/:id" element = {<Detailalbum />} />
>>>>>>> 4571b93dbcbe9451f44a3681c0ea6e369ac9afaf
            <Route path = "/genres/:id" element = {<DetailGenres />} />
        </Routes>
    );
};

export default AppRouter;
