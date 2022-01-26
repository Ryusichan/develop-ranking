import { atom } from "recoil";

export default atom<"dark" | "light">({
  key: "colorModeSelect",
  default: "dark",
});
