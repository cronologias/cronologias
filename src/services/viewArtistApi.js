export async function getArtistView (URL, TOKEN){
    
    const response = await fetch(
        URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({
                query: 'query Myquery { allNombreAutoras { id nombreDeLaArtista biografADeLaArtista imagenDeLaArtista}}'
            }),
        }
    )
    const resposeJson = await response.json()
    return resposeJson
}