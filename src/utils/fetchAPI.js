const get = async (url,headerParam={})=>{

    const headers = new Headers(headerParam)

    const myInit = { method: 'GET', headers: headers }

    return await fetch.get(url,myInit)
}

export default {get}