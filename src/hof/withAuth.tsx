import { getPayload, isTokenExpired } from "../util/auth";
import { parseCookies } from "../util/cookies";

export function withAuth(func: any) {
  return async (ctx: any) => {
    const cookies = parseCookies(ctx.req);

    // verifica se não existe token salvo nos cookies ou se ele esta com expirado, caso sim redireciona para pagina de login
    if (!cookies.token || isTokenExpired(cookies.token)) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }

    const payload = getPayload(cookies.token);

    const result = await func(ctx, cookies, payload);
    if('props' in result) {
      result.props = {
        payload,
        ...result.props,
      }
    }

    return result;
  };
}