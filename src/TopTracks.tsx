import React, { useEffect, useState } from 'react';
import  getTopTracks  from './spotifyAPI';

interface Track {
  name: string;
}

function TopTracks() {
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect(() => {
    async function fetchTopTracks() {
      try {
        const tracks = await getTopTracks();
        if (Array.isArray(tracks)) {
          setTopTracks(tracks);
        } else {
          console.error('getTopTracks retornou um valor inválido');
        }
      } catch (error) {
        console.error('Erro ao buscar as principais faixas:', error);
      }
    }

    fetchTopTracks();
  }, []);

  return (
    <div>
      <h1>Meu top 5 do spotify</h1>
      <ol>
        {topTracks.map((track, index) => (
          <li key={index}>
            {track.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TopTracks;
