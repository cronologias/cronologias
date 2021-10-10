const token = process.env.REACT_APP_TOKEN;
const URL = process.env.REACT_APP_URL;
export async function getArtist (){
    
    const response = await fetch(
        URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: 'query Myquery{allTarjetaAutoras {id nombreDeLaAutora}}'
            }),
        }
    )
    const resposeJson = await response.json()
    return resposeJson
}
