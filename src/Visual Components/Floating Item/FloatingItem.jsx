import { useEffect, useState } from 'react';
import style from './FloatingItem.module.css';

export function FloatingItem({ title, content, trigger }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [titleVisible, setTitleVisible] = useState(false);

  // Style show on / show off
  const styleTitle = titleVisible
    ? {
        position: 'absolute',
        display: 'block',
        top: coords.y - 40,
        left: coords.x - 30,
      }
    : { display: 'none' };

  const handleWindowMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div>
      <div>
        <div
          className={style.main}
          onMouseEnter={(e) => {
            e.target.addEventListener('mouseenter', (event) => {
              handleWindowMouseMove(event);
              setTitleVisible(true);
            });
          }}
          onMouseOut={(e) =>
            e.target.addEventListener('mouseleave', () => {
              setTitleVisible(false);
            })
          }
        >
          {trigger}
        </div>

        {content}
      </div>
      <div className={style.title} style={styleTitle}>
        {title}
      </div>
    </div>
  );
}
