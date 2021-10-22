import { getApiRes } from '../../services/callApi'
import Header from '../../components/header'
import ViewArtist from '../../components/viewArtist'
import Footer from '../../components/footer'

import {
  Box,
  Center
} from "@chakra-ui/react"

function dynamicViewArtist({ dataView }) {
  return (
    <>
      <Header />
      <ViewArtist names={dataView}/>
      <Footer />
    </>
  )
}

export default dynamicViewArtist



export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  
  const bodyView ='query Myquery { allNombreAutoras { id nombreDeLaArtista biografADeLaArtista imagenDeLaArtista}}'
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allNombreAutoras[0];
 
  return {
    props: {
      dataView
    }
  }
}