import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Album() {
    const [list, setList] = useState();

  useEffect(() => {
    function Afficherliste() {
      const url = 'http://localhost:8000/artists';

      fetch(url)
      .then(async reponse => setList(await reponse.json()));
    }

    Afficherliste();
  }, []);

    return <div>
        {list ? (list.map((element) => {return <Link to={"/artists/" + element.id} key={element.id}>{<img src={element.photo} />} <p>{element.name}</p></Link>})) : <div></div>}
      </div>
}