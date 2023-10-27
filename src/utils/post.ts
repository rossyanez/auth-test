export const post = (endpoint: string, data: any) => {
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data || {}),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
};
