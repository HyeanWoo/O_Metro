import { Button } from "@/sources/components/ui/button";

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
      className="w-32 h-16 bg-blue-600 "
      variant="default"
      onClick={handleClick}
    >{`${lineNumber} 호선`}</Button>
  );
}
