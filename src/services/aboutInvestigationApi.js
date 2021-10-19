export async function getInvestigation (URL, TOKEN){
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
                query: 'query MyQuery {sobreLaInvestigacion {tituloDeLaInvestigacion cuerpoDeLaInvestigacion}}'
            }),
        }
    )
    const resposeJson = await response.json()
    return resposeJson
}

