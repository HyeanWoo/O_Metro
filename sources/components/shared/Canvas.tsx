import { RefObject } from 'react';

interface CanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  width?: number;
  height?: number;
  className?: string;
}

export default function Canvas({
  canvasRef,
  height,
  width,
  className,
}: CanvasProps) {
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
    />
  );
}
