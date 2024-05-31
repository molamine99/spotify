import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detailalbum() {
    const [artist, setArtist] = useState();
    const params = useParams();

  useEffect(() => {
    function Afficherliste() {
      const url = 'http://localhost:8000/albums/artist/' + params.id;
      fetch(url)
      .then(async reponse => setArtist(await reponse.json()));
    }

    Afficherliste();
  }, [params.id]);

  console.log(artist);

    return <div>
        {artist ? <div>{
            <Link to={'/albums/' + params.id}>
                <img src={artist[0].cover} />
                <div>{artist[0].name}</div>
                <div>{artist[0].description}</div>
            </Link>
            }</div> : <div></div>}
      </div>
}


