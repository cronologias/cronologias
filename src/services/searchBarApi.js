
export async function getArtist (URl, TOKEN){
    const response = await fetch(
        URl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({
                query: 'query Myquery{allTarjetaAutoras(first:54) {id nombreDeLaAutora imagenDeLaArtista}}'
            }),
        }
    )
    const resposeJson = await response.json()
    return resposeJson
}
