import {
  ExpressStatus,
  LastStatus,
  MetroLine,
  MetroLineNameKor,
  StatusCode,
  TrainStateStatus,
  UpDownLine,
} from '@/utils/constants';

export type MetroLineKeyType = keyof typeof MetroLine;
export type MetroLineType = (typeof MetroLine)[MetroLineKeyType];
export type MetroLineNameKorType = (typeof MetroLineNameKor)[MetroLineKeyType];

export type UpDownLineType = (typeof UpDownLine)[keyof typeof UpDownLine];
export type TrainStateStatusType =
  (typeof TrainStateStatus)[keyof typeof TrainStateStatus];
export type ExpressStatusType =
  (typeof ExpressStatus)[keyof typeof ExpressStatus];
export type LastStatusType = (typeof LastStatus)[keyof typeof LastStatus];

export type StatusCodeType = keyof typeof StatusCode;

export type MetroPositionType = {
  rowNum: number;
  selectedCount: number;
  subwayId: MetroLineType;
  subwayNm: MetroLineNameKorType;
  statnId: string;
  statnNm: string;
  trainNo: string;
  lastRecptnDt: string;
  recptnDt: string;
  updnLine: UpDownLineType;
  statnTid: string;
  statnTnm: string;
  trainSttus: TrainStateStatusType;
  directAt: ExpressStatusType;
  lstcarAt: LastStatusType;
};
export type MetroListResponse = {
  errorMessage: {
    status: number;
    code: StatusCodeType;
    total: number;
  };
  realtimePositionList: MetroPositionType[];
};

//  rowNum          : 데이터 인덱스 번호
//  selectedCount   : 총 지하철 갯수
//  subwayId        : 지하철 호선 id
//  subwayNm        : 지하철 호선 이름
//  statnId         : 현재역 id
//  statnNm         : 현재역 이름
//  trainNo         : 열차번호
//  lastRecptnDt    : 최종 수신 일자
//  recptnDt        : 최종 수신 시간
//  updnLine        : 상하행 구분
//  statnTid        : 종착역 id
//  statnTnm        : 종착역 이름
//  trainSttus      : 열차 상태 구분(1: 항상 도착)
//  directAt        : 급행 여부(0: 항상 일반)
//  lstcarAt        : 막차 여부(0: 항상 아님)
