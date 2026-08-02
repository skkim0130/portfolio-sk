import { PATH } from "@/constants/path";

const WORK_CATEGORY = {
  ADMIN: "Admin",
  HR: "HR",
  CONTENT: "Content",
  DIGITAL_CONTENT: "Digital Content",
  NEWSROOM: "Newsroom",
  BRAND: "Brand",
  ECOMMERCE: "E-Commerce",
};

/**
 * 이노부스트
 * 2021 - 2024
 */
const INNOBOOST_WORKS = [
  {
    id: "admin-platform",
    title: "관리자 UI 플랫폼",
    desc: "파편화된 관리자 UI를 공통 컴포넌트 구조로 통합한 플랫폼 구축",
    category: WORK_CATEGORY.ADMIN,
    keyFeatures: [
      "Bootstrap 및 레거시 코드 정리 후 HTML/SCSS 기반 공통 템플릿 구성",
      "상이했던 마크업 구조 통합 및 컴포넌트 단위 모듈화",
      "레이아웃·폼·테이블 등 관리자 핵심 UI 요소 정리",
      "퍼블리싱 가이드 및 스타일 가이드 제작",
    ],
    role: "퍼블리싱 100%",
    year: "2023 - 2024",
    device: "PC · Mobile",
    subImageCount: 3,
  },
  {
    id: "hr-system",
    title: "인사평가 시스템",
    desc: "문서 기반으로 진행되던 인사평가를 웹 시스템으로 전환한 사내 시스템 구축",
    category: WORK_CATEGORY.HR,
    keyFeatures: [
      "점수 입력을 터치 슬라이더 방식으로 구현하여 직관적인 인터랙션 제공",
      "서술형 평가 입력과 점수 집계 영역을 포함한 반응형 레이아웃 설계",
    ],
    role: "퍼블리싱 100%",
    year: "2023",
    device: "Responsive",
  },
  {
    id: "gilead-hivision",
    title: "길리어드 HIVISION 사이트",
    desc: "HIV 관련 질환 정보를 누구나 이해할 수 있도록 제공하는 콘텐츠 사이트 구축 및 운영",
    category: WORK_CATEGORY.CONTENT,
    keyFeatures: [
      "다량의 학술 콘텐츠를 고려한 정보 중심 마크업 구조 구성",
      "영상·퀴즈·슬라이드 등 인터랙션 UI 구현",
      "검진 센터 찾기 기능을 위한 지도 기반 UI 구성",
      "PC와 모바일 환경에 최적화된 반응형 레이아웃 구현",
    ],
    role: "퍼블리싱 100%",
    year: "2023",
    device: "Responsive",
    subImageCount: 3,
    link: "https://www.hi-vision.co.kr/web",
  },
  {
    id: "veeva-iqvia",
    title: "Veeva·IQVIA CLM 콘텐츠",
    desc: "제약사 iPad 환경에 최적화된 디지털 콘텐츠 구축 및 운영",
    category: WORK_CATEGORY.DIGITAL_CONTENT,
    keyFeatures: [
      "iPad 전용 해상도 및 터치 환경을 고려한 인터랙션 콘텐츠 구현",
      "Veeva·IQVIA CLM 권장 가이드에 맞춘 슬라이드 구조 및 화면 전환 구성",
      "Salesforce 기반 운영 환경을 고려한 콘텐츠 구성 및 데이터 관리",
      "다수 국내외 제약사 CLM 프로젝트 구축 및 운영",
    ],
    role: "퍼블리싱 100%",
    year: "2021 - 2024",
    device: "Tablet",
    subImageCount: 1,
  },
  {
    id: "novo-kakao",
    title: "노보 노디스크 카카오톡 채널",
    desc: "카카오톡 인앱 환경 기반 학술 콘텐츠 채널 구축 및 운영",
    category: WORK_CATEGORY.DIGITAL_CONTENT,
    keyFeatures: [
      "카카오톡 인앱 브라우저 환경 제약을 고려한 모바일 전용 UI 구현",
      "슬라이드·영상·PDF 등 다양한 학술 콘텐츠 뷰어 마크업 및 최적화",
      "1:1 채팅 및 콘텐츠 공유 흐름을 고려한 인터랙션 UI 구성",
    ],
    role: "퍼블리싱 100%",
    year: "2021 - 2024",
    device: "Mobile",
    subImageCount: 2,
  },
  {
    id: "jeisys-drjasmine",
    title: "제이시스메디컬 닥터자스민",
    desc: "Zoom 연동 웨비나 콘텐츠 웹사이트 구축",
    category: WORK_CATEGORY.CONTENT,
    keyFeatures: [
      "웨비나 리스트 및 상세 화면 UI 퍼블리싱",
      "Zoom 라이브 영상 연동 영역을 고려한 화면 분할 레이아웃 구현",
      "운영 공지 및 웨비나 진행 상황에 따른 UI 구성 대응",
    ],
    role: "퍼블리싱 100%",
    year: "2021",
    device: "PC · Mobile",
    subImageCount: 2,
  },
  {
    id: "santen-alesion",
    title: "글로벌 제약사 학술 심포지엄 아카이브 웹사이트",
    desc: "학술 심포지엄 콘텐츠를 세션 기반으로 구성한 인터랙티브 웹사이트 구축 및 운영",
    category: WORK_CATEGORY.CONTENT,
    keyFeatures: [
      "인터랙티브 메인 비주얼 애니메이션 및 트랜지션 구현",
      "심포지엄 세션 탐색을 위한 Swiper 기반 카드 인터랙션 UI 구현",
      "영상 모달 플레이어 UI 퍼블리싱",
    ],
    role: "퍼블리싱 100%",
    year: "2021 - 2022",
    device: "PC · Mobile",
    subImageCount: 2,
  },
];

/**
 * 아이뱅크
 * 2015 - 2020
 */
const IBANK_WORKS = [
  {
    id: "amore-newssquare",
    title: "아모레퍼시픽 뉴스스퀘어",
    desc: "기업 뉴스 콘텐츠 사이트 리뉴얼 프로젝트",
    category: WORK_CATEGORY.NEWSROOM,
    keyFeatures: [
      "뉴스·칼럼·영상 등 다양한 콘텐츠 유형에 맞춘 정보 구조 정리",
      "대규모 콘텐츠 노출을 고려한 리스트 및 상세 마크업 개선",
      "퍼블리싱 가이드 및 UI 기준 정리 · Lighthouse 기반 품질 점검",
    ],
    role: "퍼블리싱 70% · PL",
    year: "2019.11 - 2020.03",
    device: "Responsive",
  },
  {
    id: "innisfree-global",
    title: "이니스프리 글로벌 사이트",
    desc: "글로벌 11개국 사이트 운영 및 유지보수",
    category: WORK_CATEGORY.BRAND,
    keyFeatures: [
      "싱가포르·태국·베트남 등 11개국 사이트 운영",
      "국가별 이벤트 페이지 및 EDM 제작",
      "다국어 환경에서의 기능 수정 및 마크업 유지보수",
    ],
    role: "운영 리드",
    year: "2018.04 - 2019.10",
    device: "Responsive",
  },
  {
    id: "innisfree-mc",
    title: "이니스프리 온라인몰 프로모션",
    desc: "신제품 론칭 중심의 마케팅 프로모션 콘텐츠 제작 및 운영",
    category: WORK_CATEGORY.ECOMMERCE,
    keyFeatures: [
      "신제품 출시 및 프로모션 이벤트 페이지 제작",
      "프로모션 페이지 내 인터랙션 및 기능 중심 UI 구현",
      "PC·모바일 적응형 프로모션 UI 퍼블리싱",
    ],
    role: "운영 전담",
    year: "2016.09 - 2018.03",
    device: "PC · Mobile",
  },
  {
    id: "innisfree-renewal",
    title: "이니스프리 온라인몰 국문",
    desc: "이니스프리 공식 온라인몰 국문 전면 리뉴얼",
    category: WORK_CATEGORY.ECOMMERCE,
    keyFeatures: [
      "제품 상세페이지 마크업 전담",
      "공통 서브페이지 일부 퍼블리싱",
      "대규모 이커머스 리뉴얼 프로젝트 협업 참여",
    ],
    role: "퍼블리싱 참여",
    year: "2016.02 - 2016.09",
    device: "PC · Mobile",
  },
  {
    id: "innisfree-moeum",
    title: "이니스프리 모음재단",
    desc: "이니스프리 모음재단 공식 웹사이트 전면 리뉴얼",
    category: WORK_CATEGORY.BRAND,
    keyFeatures: [
      "재단 소개 및 활동 중심 콘텐츠 구조 리뉴얼",
      "퍼블리싱 100% 참여 및 반응형 레이아웃 구현",
    ],
    role: "퍼블리싱 100%",
    year: "2015.11 - 2015.12",
    device: "Responsive",
  },
  {
    id: "aritaum-mall",
    title: "아리따움 온라인몰",
    desc: "아리따움 온라인몰 전면 리뉴얼",
    category: WORK_CATEGORY.ECOMMERCE,
    keyFeatures: [
      "적응형 구조 내 PC 영역 서브페이지 퍼블리싱 참여",
      "UI 가이드 기반 마크업 작업",
      "리뉴얼 프로젝트 협업 참여",
    ],
    role: "퍼블리싱 참여 (30%)",
    year: "2015.09 - 2015.11",
    device: "PC",
  },
];

/**
 * 이전 경력
 * 2014 - 2015
 */
const EARLY_CAREER_WORKS = [
  {
    id: "sheraton-walkerhill",
    title: "쉐라톤 워커힐 호텔",
    desc: "호텔 모바일 전용 공식 사이트 전면 리뉴얼",
    category: WORK_CATEGORY.BRAND,
    keyFeatures: [
      "모바일 전용 정보 중심 사이트 전면 리뉴얼 퍼블리싱",
      "호텔 소개 및 콘텐츠 페이지 마크업 작업",
    ],
    role: "퍼블리싱 100%",
    year: "2015.01 - 2015.02",
    device: "Mobile",
  },
  {
    id: "shinsegae-dutyfree",
    title: "신세계 면세점 온라인몰",
    desc: "국문·중문 면세점 온라인몰 운영 및 국문 PC 메인 리뉴얼",
    category: WORK_CATEGORY.ECOMMERCE,
    keyFeatures: [
      "국문·중문 사이트 상시 운영 및 콘텐츠 업데이트",
      "국문 PC 메인 페이지 전면 리뉴얼 퍼블리싱 (100%)",
      "프로모션 페이지 및 EDM 제작",
    ],
    role: "운영 전담 · 메인 리뉴얼",
    year: "2014.08 - 2015.06",
    device: "PC · Mobile",
  },
];

const RAW_WORKS = [...INNOBOOST_WORKS, ...IBANK_WORKS, ...EARLY_CAREER_WORKS];

export const WORKS_DATA = RAW_WORKS.map(
  ({ id, subImageCount = 0, ...work }) => ({
    id,
    ...work,
    mainImg: PATH.WORK_MAIN(id),
    subImgs: subImageCount > 0 ? PATH.WORK_SUBS(id, subImageCount) : [],
  })
);
