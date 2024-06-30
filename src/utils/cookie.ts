export function setCookie(cookieName: string, cookieValue: any) {
  window.localStorage.setItem(cookieName, JSON.stringify(cookieValue));
}
export function getCookie(cookieName: string) {
  const result = window.localStorage.getItem(cookieName);
  if (!result) return "";
  return JSON.parse(result);
}
export function deleteCookie(cookieName: string) {
  window.localStorage.removeItem(cookieName);
  return true;
}
