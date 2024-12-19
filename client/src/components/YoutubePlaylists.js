import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaylistCard from './PlaylistCard';
import { useDrop } from 'react-dnd';

const YouTubePlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [layout, setLayout] = useState([]);

  const fetchPlaylists = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('/api/playlists', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPlaylists(response.data);
    } catch (error) {
      console.error('Error fetching playlists', error);
    }
  };

  const saveLayout = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/layout', { layout }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Layout saved successfully!');
    } catch (error) {
      console.error('Error saving layout', error);
    }
  };

  const loadLayout = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('/api/layout', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLayout(response.data);
    } catch (error) {
      console.error('Error loading layout', error);
    }
  };

  const handleDrop = (item) => {
    setLayout((prevLayout) => [...prevLayout, item.id]);
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  useEffect(() => {
    fetchPlaylists();
    loadLayout(); // Load layout on component mount
  }, []);

  return (
    <div>
      <h2>Your YouTube Playlists</h2>
      <button onClick={saveLayout}>Save Layout</button>
      <button onClick={loadLayout}>Load Layout</button>
      <div ref={drop} style={{ minHeight: '400px', border: '1px dashed #ccc', padding: '10px' }}>
        {layout.map((id) => {
          const playlist = playlists.find((p) => p.id === id);
          return playlist ? <PlaylistCard key={playlist.id} playlist={playlist} /> : null;
        })}
        {canDrop && isOver && <div style={{ backgroundColor: 'lightgreen' }}>Release to drop</div>}
      </div>
      <div>
        <h3>Available Playlists</h3>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default YouTubePlaylists;