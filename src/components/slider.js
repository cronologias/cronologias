import React, { useState } from 'react';
import { Text, Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
}
    from '@chakra-ui/icons'
console.log(Slider)
const Slider = (props) => {
    const position = props.position;
    const [currentSlide, setCurrentSlide] = useState(Number(position));
    const slidesCount = props.slides.length;
    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const carouselStyle = {
        transition: 'all .5s',
        ml: `-${currentSlide * 100}%`,
    };
    let url = '/cronologias-invisible'
    let imgurl ='';
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
        >
            <Flex w='full' overflow='hidden' pos='relative'>
                <Flex w='full' {...carouselStyle} >
                    {props.slides.map((slide, sid) => (
                        slide.imagenDeLaObraDeLaArtista === '' ? url = url : url = slide.imagenDeLaObraDeLaArtista,
                        imgurl = buildUrl(url, {
                            cloud: {
                                cloudName: 'cronologias-invisible',
                            },
                            transformations: {
                                width:'1031',
                                quality:'75',
                            }
                        }),
                        <Box key={`slide-${sid}`} flex='none' w='100%'>
                            <Box   height={{ base: '480px', md: '581px', lg: '682px' }} position='relative'>
                                <Image layout='fill' objectFit='contain' src={imgurl} />
                            </Box>
                            <Box bg='brand.primaryBlack' p={7} mb={50}>
                            <Text fontSize='0.75rem' color='brand.baseColor' pb='0.75rem'>
                                {slide.derechoDeAutor}
                            </Text>
                            <Heading as='h2' fontSize='1.75rem' mb={4} color='brand.baseColor'>
                                {slide.tTuloDeLaObra}
                            </Heading>
                            <Text fontSize='1rem' color='brand.baseColor'>
                                {slide.informaciNExtra}
                            </Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
                <IconButton
                    pos='absolute'
                    top='40%'
                    userSelect='none'
                    zIndex='2'
                    onClick={prevSlide}
                    bg='transparent'
                    borderRadius='none'
                    backgroundColor='rgba(38, 38, 38, 0.5)'
                    mr='14'
                    aria-label='imagen anterior'
                    _hover={{ bg: 'brand.secondaryOrange', borderRadius: 'none' }}
                    _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius: 'none' }}
                    _focus={{ boxShadow: 'none', borderRadius: 'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack' }} icon={<ChevronLeftIcon color='brand.baseColor' w={10} h={10} />}

                />
                <IconButton
                    pos='absolute'
                    top='40%'
                    right='0'
                    userSelect='none'
                    zIndex='2'
                    onClick={nextSlide}
                    bg='transparent'
                    borderRadius='none'
                    backgroundColor='rgba(38, 38, 38, 0.5)'
                    aria-label='siguiente imagen'
                    icon={<ChevronRightIcon color='brand.baseColor' w={10} h={10} />}
                    _hover={{ bg: 'brand.secondaryOrange', borderRadius: 'none' }}
                    _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius: 'none' }}
                    _focus={{ boxShadow: 'none', borderRadius: 'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack' }}
                />
            </Flex>
        </Flex>
    );
};
export default Slider;