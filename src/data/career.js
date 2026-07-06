export const CAREER_DATA = [
  {
    start: "2021.01",
    end: "2024.06",
    period: "3년 6개월",
    company: "이노부스트",
    role: "웹퍼블리셔 / 파트 리더",
  },
  {
    start: "2015.09",
    end: "2020.03",
    period: "4년 7개월",
    company: "아이뱅크 디지털웍스",
    role: "웹퍼블리셔",
  },
  {
    start: "2014.08",
    end: "2015.06",
    period: "11개월",
    company: "나우온플레이",
    role: "웹퍼블리셔",
  },
  {
    start: "2012.10",
    end: "2013.10",
    period: "1년 1개월",
    company: "블루웹",
    role: "웹디자이너 / 퍼블리싱",
  },
];

// 계산
export const getTotalCareerText = () => {
  const totalMonths = CAREER_DATA.reduce((sum, item) => {
    const [sy, sm] = item.start.split(".").map(Number);
    const [ey, em] = item.end.split(".").map(Number);

    return sum + (ey - sy) * 12 + (em - sm) + 1;
  }, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return {
    years,
    text: `${years}년 ${months}개월`,
  };
};
