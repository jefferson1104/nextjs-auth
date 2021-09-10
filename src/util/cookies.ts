import cookie from 'cookie';
import Cookies from 'js-cookie';

// funcao para converter um cookie em objeto
export function parseCookies(req?: any) {
  if (!req || !req.headers) {
    return {}
  }

  return cookie.parse(req.headers.cookie || "");
}

// funcao para salvar cookies
export function setCookie(key: string, value: string | object, options?: Cookies.CookieAttributes ) {
  Cookies.set(key, value, {
    ...options,
    secure: process.env.NODE_ENV === 'production' ? true : false,
  });
}