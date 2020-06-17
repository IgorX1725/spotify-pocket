import content from '../constants/content';

export const addTrackToPlayer = (track) => ({
  type: content.ADD_PLAYER_TRACK,
  payload: track,
})


export const getCategoriesRequest = () => ({
  type: content.GET_CATEGORIES_REQUEST,
})


export const getCategoriesSuccess = ({ categories  }) =>  {
  return {
    type: content.GET_CATEGORIES_SUCCESS,
    payload: categories.items,
  };
}

export const getCategoriesFailed = ({ message }) => ({
  type: content.GET_CATEGORIES_FAILED,
  payload: { message },
})

export const getCategoryPlaylistRequest = () => ({
  type: content.GET_CATEGORY_PLAYLIST_REQUEST,
})

export const getCategoryPlaylistSuccess = ({ playlists  }) =>  ({
  type: content.GET_CATEGORY_PLAYLIST_SUCCESS,
  payload: playlists.items,
})

export const getCategoryPlaylistFailed = ({ message }) => ({
  type: content.GET_CATEGORY_PLAYLIST_FAILED,
  payload: { message },
})

export const getPlaylistTracksRequest = () => ({
  type: content.GET_PLAYLIST_TRACKS_REQUEST,
})

export const getPlaylistTracksSuccess = ({ items }) =>  ({
  type: content.GET_PLAYLIST_TRACKS_SUCCESS,
  payload: items,
})

export const getPlaylistTracksFailed = ({ message }) => ({
  type: content.GET_PLAYLIST_TRACKS_FAILED,
  payload: { message },
})

export const removeTrackToPlayer = () => ({
  type: content.REMOVE_PLAYER_TRACK,
});

export const setPlayerHeight = (height) => ({
  type: content.SET_PLAYER_HEIGHT,
  payload: height,
});