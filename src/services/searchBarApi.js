const token = process.env.TOKEN;
const URL = process.env.URL;
console.log(token)
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
                query: 'query Myquery{allTarjetaAutoras(first:54) {id nombreDeLaAutora}}'
            }),
        }
    )
    const resposeJson = await response.json()
    return resposeJson
}
