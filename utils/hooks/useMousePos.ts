import React, { useState, useEffect } from 'react'

export interface WindowCoordinates {
  x: number,
  y: number
}

const useMousePos = () => {
  const [mousePos, setMousePos] = useState<WindowCoordinates>({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return mousePos;
}

export default useMousePos