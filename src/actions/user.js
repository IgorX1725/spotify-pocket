import user from '../constants/user'

import thumbnailDefault from '../assets/images/profile-user-thumbnail.png'

export const getUserSuccess = (payload) => {
    const userProfile = {
      email: payload.email,
      name: payload.display_name,
      thumb: payload.images.length ? payload.images[0].url : thumbnailDefault,
    }

    return {
        type: user.GET_USER_SUCCESS,
        payload: { ...userProfile }
      }
    }



