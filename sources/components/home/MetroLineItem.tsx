import { Button } from '@/ui/button';

interface MetroLineItemProps {
  lineNumber: number;
  setMetroLine: () => void;
}

export default function MetroLineItem({
  lineNumber,
  setMetroLine,
}: MetroLineItemProps) {
  const handleClick = () => {
    setMetroLine();
  };

  return (
    <Button
      className="h-16 w-32 bg-blue-600"
      variant="default"
      onClick={handleClick}
    >{`${lineNumber} 호선`}</Button>
  );
}
