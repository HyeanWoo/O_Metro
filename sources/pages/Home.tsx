'use client';

import { useState } from 'react';
import { MetroLineItem, MetroLineMap } from '@/components/home';

export default function Home() {
  const [lineNumber, setLineNumber] = useState(1);

  return (
    <div className="flex p-5">
      <aside className="flex flex-col gap-2">
        <MetroLineItem lineNumber={1} setMetroLine={() => setLineNumber(1)} />
        <MetroLineItem lineNumber={2} setMetroLine={() => setLineNumber(2)} />
        <MetroLineItem lineNumber={3} setMetroLine={() => setLineNumber(3)} />
        <MetroLineItem lineNumber={4} setMetroLine={() => setLineNumber(4)} />
        <MetroLineItem lineNumber={5} setMetroLine={() => setLineNumber(5)} />
        <MetroLineItem lineNumber={6} setMetroLine={() => setLineNumber(6)} />
        <MetroLineItem lineNumber={7} setMetroLine={() => setLineNumber(7)} />
        <MetroLineItem lineNumber={8} setMetroLine={() => setLineNumber(8)} />
        <MetroLineItem lineNumber={9} setMetroLine={() => setLineNumber(9)} />
      </aside>
      <main>
        <MetroLineMap lineNumber={lineNumber} />
      </main>
    </div>
  );
}
