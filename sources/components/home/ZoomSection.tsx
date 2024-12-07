import { Button } from '@/ui/button';

export default function ZoomSection() {
  return (
    <div className="flex flex-col gap-1">
      <Button className="text-4xl">+</Button>
      <Button className="text-4xl">-</Button>
    </div>
  );
}
