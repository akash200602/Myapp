import React from 'react';
import { useDrag } from 'react-dnd';

const PlaylistCard = ({ playlist }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: playlist.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3>{playlist.title}</h3>
      <img src={playlist.thumbnail} alt={playlist.title} />
    </div>
  );
};

export default PlaylistCard;