import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myData = [
      { id: 1, title: 'Hugo Ekitike — Eintracht Frankfurt → Liverpool' },
      { id: 2, title: 'Giorgi Mamardashvili — Valencia → Liverpool' },
      { id: 3, title: 'Armin Pecsi — Puskas Akademia → Liverpool' },
      { id: 4, title: 'Florian Wirtz — Bayer Leverkusen → Liverpool' },
      { id: 5, title: 'Milos Kerkez — Bournemouth → Liverpool' },
    ];
    setTimeout(() => {
      setData(myData);
      setLoading(false);
    }, 500); // симуляция короткой задержки
  }, []);

  if (loading) return <p>Завантаження даних...</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}><strong>{post.title}</strong></li>
      ))}
    </ul>
  );
}

export default DataFetcher;