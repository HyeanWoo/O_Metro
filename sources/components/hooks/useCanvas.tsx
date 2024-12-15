import { useEffect, useRef, useState } from 'react';

export default function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      setCtx(context);
    }
  }, []);

  return {
    canvasRef,
    ctx,
  };
}
