import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowList() {
  const [shows, setShows] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    const fetchShows = async () => {
      // API Lnk:- https://api.tvmaze.com/search/shows?q=all
      try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
        setShows(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchShows();
  }, [search]);

  if (!shows) { return <div className='loading'>Loading...</div>; }

  return (
    <div className='showlist'>
      <p className='body-title'>Show Results: {search? `${search}` : ""}</p>
      <ul className="show-list">
        {shows.map((show) => (
          <li key={show.show.id}>
            <div className="show-card">
              <Link to={`/shows/${show?.show?.id}`}>
                <img src={show?.show?.image?.medium ? show?.show?.image?.medium : "https://img.icons8.com/plasticine/100/no-image.png"} alt='Background' />
                <h3 className='show-card-name'>{show.show.name}</h3>
                <p className='show-card-genres'>{show.show.genres.join(', ')}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
