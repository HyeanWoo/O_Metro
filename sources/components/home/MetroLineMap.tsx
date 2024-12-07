import Image from 'next/image';
import SearchSection from './SearchSection';
import ZoomSection from './ZoomSection';

interface MetroLineMapProps {
  lineNumber: number;
}

export default function MetroLineMap({ lineNumber }: MetroLineMapProps) {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0">
        <ZoomSection />
      </div>
      <Image
        alt={`metro map line${lineNumber}`}
        src={`/metro_line/metro${lineNumber}.png`}
        width={800}
        height={600}
        className="h-[600px] w-[800px] object-contain"
      />
      <div className="absolute bottom-0 right-0">
        <SearchSection />
      </div>
    </div>
  );
}
