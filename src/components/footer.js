import React from 'react';
import NextLink from 'next/link';
import { Box, Center, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import logo from '../../public/logoNaranja.svg';
import Image from 'next/image';
import facebookWhite from '../../public/facebook_white.svg';
import youtubeWhite from '../../public/youtube_white.svg';
import tiktokWhite from '../../public/tiktok_white.svg';
import instagramWhite from '../../public/instagram_white.svg';
function Footer() {
	return (
		<>
			<Box
				bg="brand.primaryBlack"
				w={'100%'}
				p={9}
				display="flex"
				flexWrap="wrap"
			>
				<Center w="100%">
					<NextLink href="/">
						<a>
							<Box
								w={{ base: '100px', md: '130px', lg: '150px' }}
								h="100px"
								position="relative"
							>
								<Image
									layout="fill"
									src={logo}
									alt="Cronologias de lo Invisible"
								/>
							</Box>
						</a>
					</NextLink>
				</Center>
				<Box
					display="flex"
					w="100%"
					justifyContent="center"
					mt={2}
					fontSize="20px"
				>
					<UnorderedList
						w="150px"
						height="24px"
						display="flex"
						justifyContent="space-between"
						p={0}
						m={0}
						listStyleType="none"
					>
						<ListItem
							width="24px"
							height="24px"
							borderRadius="100px"
							bg="#4D4D4D"
							_hover={{
								bg: 'brand.primaryOrange',
							}}
							_active={{
								bg: 'brand.primaryOrange',
							}}
						>
							<Link
								href="https://m.facebook.com/cronologiasdeloinvisible/"
								target="_blank"
								width="24px"
								height="24px"
							>
								<Image
									src={facebookWhite}
									alt="Facebook"
									width="24px"
									height="24px"
								/>
							</Link>
						</ListItem>
						<ListItem
							width="24px"
							height="24px"
							borderRadius="100px"
							bg="#4D4D4D"
							_hover={{
								bg: 'brand.primaryOrange',
							}}
							_active={{
								bg: 'brand.primaryOrange',
							}}
						>
							<Link
								href="https://youtube.com/channel/UCAQ_HhSllvmZOyiHYmG10Rw"
								target="_blank"
								width="24px"
								height="24px"
							>
								<Image
									src={youtubeWhite}
									alt="Facebook"
									width="24px"
									height="24px"
								/>
							</Link>
						</ListItem>
						<ListItem
							width="24px"
							height="24px"
							borderRadius="100px"
							bg="#4D4D4D"
							_hover={{
								bg: 'brand.primaryOrange',
							}}
							_active={{
								bg: 'brand.primaryOrange',
							}}
						>
							<Link
								href="https://www.tiktok.com/@cronologiasdeloinvisible?_t=8WOvud1s5GH&_r=1"
								target="_blank"
								width="24px"
								height="24px"
							>
								<Image
									src={tiktokWhite}
									alt="Facebook"
									width="24px"
									height="24px"
								/>
							</Link>
						</ListItem>
						<ListItem
							width="24px"
							height="24px"
							borderRadius="100px"
							bg="#4D4D4D"
							_hover={{
								bg: 'brand.primaryOrange',
							}}
							_active={{
								bg: 'brand.primaryOrange',
							}}
						>
							<Link
								href="https://www.instagram.com/invites/contact/?i=a962ida0ckqx&utm_content=nf16ovx"
								target="_blank"
								width="24px"
								height="24px"
							>
								<Image
									src={instagramWhite}
									alt="Facebook"
									width="24px"
									height="24px"
								/>
							</Link>
						</ListItem>
					</UnorderedList>
				</Box>
			</Box>
		</>
	);
}

export default Footer;
