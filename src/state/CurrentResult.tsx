import { atom } from "recoil";

export type FilmOptionType = {
  inputValue?: string;
  title: string;
  year?: number;
};

export default atom<FilmOptionType | null>({
  key: "currentResult",
  default: null,
});
