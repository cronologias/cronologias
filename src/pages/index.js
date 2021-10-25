import Link from "next/link";
import { Box, Center, Image, Text} from "@chakra-ui/react";
import MobileSlider from "../components/mobileSlider";
import Header from "../components/header";
import CuratorsCards from "../components/curatorsCards";
import Footer from "../components/footer";
import {getApiRes} from "../services/callApi";
import Head from "next/head";
import VideoPlayer from "../components/VideoPlayer";
import React from "react";
//import styles from "../styles/Home.module.css";



export default function IndexPage() {
  return (
      <>
        <VideoPlayer />
      </>
  );
}


export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  
  const curatorsInfo ='query MyQuery{ allTarjetaCuradoras{ nombreDeLaCuradora enlaceDeLaImagen breveDescripcionDeLaCuradora }}'
  const museumInfo ='query MyQuery {allVisitaLaExposicions{ enlaceDeLaImagen, tituloDeLaTarjeta}}'
  
  const getCurators = await getApiRes(URl,TOKEN, curatorsInfo)
  const curatorsData = getCurators.data.allTarjetaCuradoras
  
  const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
  const museumData = getMuseum.data.allVisitaLaExposicions

  return{
    props: {
      curatorsData,
      museumData,
    }
  }
}