import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";

export const accessToken = {
  //using local storage, not using any package.
  get: (): string => {
    return getCookie("accessToken");
  },
  set: (token: string) => {
    return setCookie("accessToken", token);
  },
  remove: () => {
    return deleteCookie("accessToken");
  },
};
