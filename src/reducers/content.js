import content from '../constants/content'
const INITIAL_STATE ={

    categories: [],
    playlists: [],
    tracks: [],
    playingNowId: null,
    playingNowTrack: null,
    playerHeight: 0,
    status: "idle",
    errorMessage: ""
  
}

function reducer(store = INITIAL_STATE, action){

    if(action.type === content.GET_CATEGORIES_REQUEST)
      return {
        ...store,
        categories: [],
        status: 'running',
      }

    if(action.type === content.GET_CATEGORIES_SUCCESS){
        store = {
            ...store,
            categories:action.payload,
            status: 'success'
        }
    }

    if(action.type === content.GET_CATEGORY_PLAYLIST_REQUEST){
      return {
        ...store,
        playlists: [],
        status: 'running',
      }
    }

    if(action.type === content.GET_CATEGORY_PLAYLIST_SUCCESS){
      return {
        ...store, playlists: action.payload, status: 'success'
      }
    }

    if(action.type === content.GET_PLAYLIST_TRACKS_REQUEST){
      return {
        ...store,
        tracks:[],
       status:'running'
      }
    }

    if(action.type === content.GET_PLAYLIST_TRACKS_SUCCESS){
      return {
        ...store,
        tracks: action.payload,
       status:'success'
      }
    }

    if(action.type === content.REMOVE_PLAYER_TRACK){
      return {
        ...store,
        playingNowId: "",
        playingNowTrack: "",
        playerHeight: 0,
      }
    }

    if(action.type === content.ADD_PLAYER_TRACK){
      return {
        ...store,
        playingNowId: action.payload.id,
        playingNowTrack: action.payload,
      }
    }

    if(action.type === content.SET_PLAYER_HEIGHT){
      return {
        ...store,
        playerHeight: action.payload
      }
    }

    return store
}

export default reducer