'use client';

import { Canvas } from '@/shared';
import useCanvas from '../hooks/useCanvas';
import { Button } from '../ui/button';

export default function MetroBoard() {
  const { canvasRef, ctx } = useCanvas();

  function drawRect() {
    if (!ctx) {
      return;
    }
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(100, 100, 200, 200);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.fillRect(150, 150, 200, 200);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // ctx.save();
        ctx.fillStyle = 'rgb(' + 51 * i + ', ' + (255 - 51 * i) + ', 255)';
        ctx.translate(10 + j * 50, 10 + i * 50);
        ctx.fillRect(0, 0, 25, 25);
        // ctx.restore();
      }
    }
  }

  function drawTriangle() {
    if (!ctx) {
      return;
    }

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = 'rgb(0, 200, 0)';
    ctx.fillRect(25, 25, 3, 3);
    ctx.fillRect(105, 25, 3, 3);
    ctx.fillRect(25, 105, 3, 3);
    ctx.fillRect(125, 125, 3, 3);
    ctx.fillRect(125, 45, 3, 3);
    ctx.fillRect(45, 125, 3, 3);
  }

  function drawCircle() {
    if (!ctx) {
      return;
    }

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.fillStyle = 'rgb(120, 0, 180)';
    ctx.fillRect(75, 75, 3, 3);
    ctx.fillRect(75, 75, 3, 3);
    ctx.fillRect(60, 65, 3, 3);
    ctx.fillRect(90, 65, 3, 3);
  }

  function drawMultipleArc() {
    if (!ctx) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50;
        const y = 25 + i * 50;
        const radius = 20;
        const startAngle = 0;
        const endAngle = Math.PI + (Math.PI * j) / 2;
        const anticlockwise = i % 2 === 0 ? false : true;

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }

  function drawQuadraticCurveAndBezierCurve() {
    if (!ctx) {
      return;
    }

    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();

    ctx.fillStyle = 'rgb(235, 0, 0)';
    ctx.fillRect(25, 25, 3, 3);
    ctx.fillRect(25, 100, 3, 3);
    ctx.fillRect(50, 120, 3, 3);
    ctx.fillRect(60, 120, 3, 3);
    ctx.fillRect(125, 100, 3, 3);
    ctx.fillRect(125, 25, 3, 3);

    ctx.fillStyle = 'rgb(0, 0, 235)';
    ctx.fillRect(75, 25, 3, 3);
    ctx.fillRect(25, 62.5, 3, 3);
    ctx.fillRect(50, 100, 3, 3);
    ctx.fillRect(30, 125, 3, 3);
    ctx.fillRect(65, 100, 3, 3);
    ctx.fillRect(125, 62.5, 3, 3);
    ctx.fillRect(75, 25, 3, 3);

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();
    ctx.moveTo(75, 190);
    ctx.bezierCurveTo(75, 187, 70, 175, 50, 175);
    ctx.bezierCurveTo(20, 175, 20, 212.5, 20, 212.5);
    ctx.bezierCurveTo(20, 230, 40, 252, 75, 270);
    ctx.bezierCurveTo(110, 252, 130, 230, 130, 212.5);
    ctx.bezierCurveTo(130, 212.5, 130, 175, 100, 175);
    ctx.bezierCurveTo(85, 175, 75, 187, 75, 190);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = 'rgb(235, 0, 0)';
    ctx.fillRect(75, 187, 3, 3);
    ctx.fillRect(20, 175, 3, 3);
    ctx.fillRect(20, 230, 3, 3);
    ctx.fillRect(110, 252, 3, 3);
    ctx.fillRect(130, 212.5, 3, 3);
    ctx.fillRect(85, 175, 3, 3);

    ctx.fillRect(70, 175, 3, 3);
    ctx.fillRect(20, 212.5, 3, 3);
    ctx.fillRect(40, 252, 3, 3);
    ctx.fillRect(130, 230, 3, 3);
    ctx.fillRect(130, 175, 3, 3);
    ctx.fillRect(75, 187, 3, 3);

    ctx.fillStyle = 'rgb(0, 0, 235)';
    ctx.fillRect(75, 190, 3, 3);
    ctx.fillRect(50, 175, 3, 3);
    ctx.fillRect(20, 212.5, 3, 3);
    ctx.fillRect(75, 270, 3, 3);
    ctx.fillRect(130, 212.5, 3, 3);
    ctx.fillRect(100, 175, 3, 3);
    ctx.fillRect(75, 190, 3, 3);
  }

  function drawMultipleObject() {
    function roundedRect(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
    ) {
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      ctx.stroke();
    }

    if (!ctx) {
      return;
    }
    roundedRect(ctx, 12, 12, 514, 514, 15);
    roundedRect(ctx, 19, 19, 500, 500, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (let i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }

  function drawObjectByPath2D() {
    if (!ctx) {
      return;
    }

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);

    const svg = new Path2D('M50 50 h 80 v 80 h -80 Z');

    ctx.stroke(svg);
  }

  return (
    <div>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawRect}
      >
        Draw
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawTriangle}
      >
        Draw2
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawCircle}
      >
        Draw3
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawMultipleArc}
      >
        Draw4
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawQuadraticCurveAndBezierCurve}
      >
        Draw5
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawMultipleObject}
      >
        Draw6
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={drawObjectByPath2D}
      >
        Draw7
      </Button>
      <Button
        className="focus:border-4 focus:border-sky-300"
        onClick={() => ctx?.reset()}
      >
        Clear
      </Button>
      <Canvas
        canvasRef={canvasRef}
        className="border border-black"
        height={600}
        width={800}
      />
    </div>
  );
}
