export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'ff3ec78bf99d47a8abbf9e2c2586a7d3',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    response_type: 'token',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }
}
