export function processToken(token) {
  if (!token) return null;
  const payload = parseJWT(token);
  return {
    token,
    exp: payload?.exp,
    get isExpired() {
      return Date.now() - 5000 > this.exp * 1000;
    },
  };
}
export function retrieveToken() {
  const token = window.localStorage.getItem('accessToken');
  return processToken(token);
}

export function persistToken(accessToken) {
  if (accessToken) window.localStorage.setItem('accessToken', accessToken);
  else window.localStorage.removeItem('accessToken');
}

function parseJWT(token) {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  const encoded = atob(base64)
    .split('')
    .map((c) => '%00' + c.charCodeAt(0).toString(16).slice(-2))
    .join('');
  let data = null;
  try {
    data = JSON.parse(encoded);
  } catch {}
  return data;
}
