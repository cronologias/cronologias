export async function getApiRes (URl, TOKEN, query){
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
                query: query
            }),
        }
    )
    const resposeJson = await response.json()
    return resposeJson
}