import { getApiRes } from '../../services/callApi'
import Header from '../../components/header'
import {ViewArtist} from '../../components/viewArtist'
import Footer from '../../components/footer'
import Galery from '../../components/artistGalery'
import {
  Box,
  Center
} from "@chakra-ui/react"

function dynamicViewArtist({ dataView }) {
  return (
    <>
      <Header />
      <ViewArtist names={dataView}/>
      <Galery images={dataView.obrasDeLaAutora}/>
      <Footer />
    </>
  )
}

export default dynamicViewArtist

export async function getStaticPaths() {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  const bodyView =`query Myquery {allTarjetaAutoras {id}}`
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allTarjetaAutoras;

  const paths = dataView.map(artist => {
    return {
      params : { id:`${artist.id}`}
    }
  })
  return {
    paths,
    fallback: false
  }
}

/*
 const id = "65012891";
  const bodyView =`query Myquery {allTarjetaAutoras(filter: {id: {eq: ${id}}}) {id imagenDeLaArtista nombreDeLaAutora biografia obrasDeLaAutora {id}}}`

*/

export async function getStaticProps ( { params } ) {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  //necesito ver la petición de esta vista pedir a steph o a jose ${params.id} pasar dentro de body
  const bodyView =`query Myquery {allTarjetaAutoras(filter: {id: {eq: ${params.id}}}) {id imagenDeLaArtista nombreDeLaAutora biografia obrasDeLaAutora {id imagenDeLaObraDeLaArtista}}}`
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allTarjetaAutoras[0];
  return {
    props: {
      dataView
    }
  }
}