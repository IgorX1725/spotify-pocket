
const getInfoFromUrlHash = (urlHash)=>{

    if (!urlHash) {
        return { error: 'Acesso negado. Você não possui permissões para acessar o aplicativo' };
      }

    const result = urlHash.replace('#','').split('&').reduce((result, item) =>{
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
    }, {});

    return result
}

export {getInfoFromUrlHash}
