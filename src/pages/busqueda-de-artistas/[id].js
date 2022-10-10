import { getApiRes } from '../../services/callApi';
import Header from '../../components/header';
import { ViewArtist } from '../../components/viewArtist';
import Footer from '../../components/footer';
import Galery from '../../components/artistGalery';
import Head from 'next/head';
function dynamicViewArtist({ dataView }) {
	return (
		<>
			<Head>
				<link
					rel="icon"
					type="image/svg"
					sizes="42x42"
					href="/logoCrono.png"
				/>
			</Head>
			<Header />
			<ViewArtist names={dataView} />
			<Galery images={dataView.obrasDeLaAutora} />
			<Footer />
		</>
	);
}
export default dynamicViewArtist;

export async function getStaticPaths() {
	const URl = process.env.NEXT_URL;
	const TOKEN = process.env.NEXT_TOKEN;
	const bodyView = `query Myquery {allTarjetaAutoras(first:100) {id}}`;
	const getView = await getApiRes(URl, TOKEN, bodyView);
	const dataView = getView.data.allTarjetaAutoras;

	const paths = dataView.map((artist) => {
		return {
			params: { id: `${artist.id}` },
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const URl = process.env.NEXT_URL;
	const TOKEN = process.env.NEXT_TOKEN;
	const bodyView = `query Myquery {allTarjetaAutoras(filter: {id: {eq: ${params.id}}}) {id imagenDeLaArtista nombreDeLaAutora biografia obrasDeLaAutora {id derechoDeAutor informaciNExtra tTuloDeLaObra imagenDeLaObraDeLaArtista}}}`;
	const getView = await getApiRes(URl, TOKEN, bodyView);
	const dataView = getView.data.allTarjetaAutoras[0];
	return {
		props: {
			dataView,
		},
	};
}
