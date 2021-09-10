export function isTokenExpired(token: string) {
  const payload = getPayload(token);

  const clockTimestamp = Math.floor(Date.now() /1000)

  // comparando data atual com a data de expiração do token
  return clockTimestamp > payload.exp;
}

export function getPayload(token: string) {
  return JSON.parse(
    Buffer.from(token.split('.')[1], 'base64').toString('utf8')
  );
}