import { PATH } from "@/constants/path";
import { getTotalCareerText } from "./career";

const career = getTotalCareerText();

export const PROFILE_DATA = {
  name: "김선경",
  profileImg: PATH.PROFILE,
  role: "Web Publisher",
  career: `${career.years}년 차`,
  intro:
    "다양한 웹 프로젝트 경험을 바탕으로, 유지보수성과 확장성을 고려한 UI를 구현합니다.",
  notionUrl:
    "https://smoggy-linen-a30.notion.site/2ee1a88239c380de94d1ed9d1f2bf461",
  githubUrl: "https://github.com/skkim0130/portfolio-sk",
};
