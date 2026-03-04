const BASE = import.meta.env.BASE_URL;
const WORKS_PATH = `${BASE}images/works`;

export const PATH = {
  PROFILE: `${BASE}images/profile.png`,

  // 메인 이미지 경로
  WORK_MAIN: (id) => `${WORKS_PATH}/${id}/main.png`,

  // 모달 이미지 리스트
  WORK_SUBS: (id, count = 0) =>
    Array.from({ length: count }, (_, i) => {
      const fileName = String(i + 1).padStart(2, "0");
      return `${WORKS_PATH}/${id}/${fileName}.png`;
    }),
};
