import React from "react";
import {getApiRes} from "../../services/callApi"
import ExpositionMuseum from "../../components/viewExpositions";

function ExpositionContainer({ expositionData}) {
  return (
      <>
      <ExpositionMuseum expositions={expositionData}/>
      </>

  )
}
export default ExpositionContainer

export async function getStaticPaths() {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyView =`query Myquery {allVisitaLaExposicions {id}}`
    const getView = await getApiRes(URl,TOKEN, bodyView);
    const dataView = getView.data.allVisitaLaExposicions;
  
    const paths = dataView.map(expositions => {
      return {
        params : { id:`${expositions.id}`}
      }
    })
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps ({params}) {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyExposition =`query MyQuery {allVisitaLaExposicions (filter: {id: {eq: ${params.id}}}) {id tituloDeLaTarjeta enlaceDeLaImagen fechaDeLaExposicion fechaDeFinalizacionDeLaExposicion ubicacionDelMuseo recorrido360}}`
    const getExposition = await getApiRes(URl,TOKEN, bodyExposition)
    const expositionData = getExposition.data.allVisitaLaExposicions
    return{
        props: {
            expositionData,
        }
    }
}