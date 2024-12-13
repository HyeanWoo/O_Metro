'use client';

import { useEffect, useState } from 'react';
import { MetroListResponse } from '@/sources/api/types';

export default function MetroInfo() {
  const [metroList, setMetroList] = useState<null | MetroListResponse>(null);

  useEffect(() => {
    const fetchMetroList = async () => {
      const res = await fetch('http://localhost:8080/metro-list/line4');
      const data = (await res.json()) as MetroListResponse;
      setMetroList(data);
    };

    fetchMetroList();
  }, []);

  if (!metroList) {
    return <div>현재 운행중인 지하철이 없습니다.</div>;
  }

  return (
    <div className="flex overflow-x-auto w-full gap-2">
      {metroList?.realtimePositionList?.map((metroItem) => (
        <div
          key={metroItem.trainNo}
          className="flex flex-col w-52 flex-shrink-0 border border-indigo-600 p-1"
        >
          <span className="">{metroItem.rowNum}</span>
          <span className="">{metroItem.selectedCount}</span>
          <span className="">{metroItem.subwayId}</span>
          <span className="">{metroItem.subwayNm}</span>
          <span className="">{metroItem.statnId}</span>
          <span className="">{metroItem.statnNm}</span>
          <span className="">{metroItem.trainNo}</span>
          <span className="">{metroItem.lastRecptnDt}</span>
          <span className="">{metroItem.recptnDt}</span>
          <span className="">{metroItem.updnLine}</span>
          <span className="">{metroItem.statnTid}</span>
          <span className="">{metroItem.statnTnm}</span>
          <span className="">{metroItem.trainSttus}</span>
          <span className="">{metroItem.directAt}</span>
          <span className="">{metroItem.lstcarAt}</span>
        </div>
      ))}
    </div>
  );
}
