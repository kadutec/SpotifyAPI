const token = 'BQCH9fL1ZrHzSZmLzfkBNlvN7IN3mYU2jQ1mLtduCjg6LtZnZ0APnnzk3n1xtseIQDAHlW-G2KqyTUnl5Ah9kq6cYUiWSr4by9eUEL5DxTOHfra1NthMQ7MH5jPTtdqR-ST8HSDYXVXJZXXF32euvLhcVV1u_VnrQEyf0dMDG_h6NL47pEExfawPnJvffkLU35KKPhsf-B6oSEEwSok_wfRPqvZ9fHJJF7SoYmYh7UJXZWcJry993YV_83DEytwTsR2gWSY1sqypxOEKV9bw';

async function fetchWebApi(endpoint: string, method: string) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
  });
  return await res.json();
}

async function getTopTracks() {
  // Referência do endpoint: https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5',
    'GET',
  )).items;
}

export default getTopTracks;
