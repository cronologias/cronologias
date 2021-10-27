import React, { useState } from 'react';
import { Text, Box, Flex, Heading, Image, IconButton } from '@chakra-ui/react';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
}
    from '@chakra-ui/icons'

const Slider = (props) => {
    const position = props.position;
    const [currentSlide, setCurrentSlide] = useState(position);
    const slidesCount = props.slides.length;
    console.log(position, props.slides);
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

    return (
        <Flex
            alignItems='center'
            justifyContent='center'
        >
            <Flex w='full' overflow='hidden' pos='relative'>
                <Flex w='full' {...carouselStyle} >
                    {props.slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} flex='none' maxW='100%'>
                            <Image src={slide.imagenDeLaObraDeLaArtista} />
                            <Box bg='brand.primaryBlack' p={7} mb={50}>
                            <Heading as='h2' fontSize='1.75rem' mb={4} color='brand.baseColor'>
                                {slide.title}
                            </Heading>
                            <Text fontSize='1rem' color='brand.baseColor'>
                                {slide.text}
                            </Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
                    <IconButton
                        pos= 'absolute'
                        top= '40%'
                        userSelect= 'none'
                        zIndex='2'
                        onClick={prevSlide}
                        bg='transparent'
                        borderRadius='none'
                        backgroundColor='rgba(38, 38, 38, 0.5)'
                        mr='14'
                        aria-label='imagen anterior'
                        _hover={{ bg: 'brand.secondaryOrange', borderRadius:'none'}}
                        _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius:'none'}}
                        _focus={{ boxShadow: 'none', borderRadius:'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack'}}icon={<ChevronLeftIcon color='brand.baseColor' w={10} h={10} />} 
                        
                        />
                        <IconButton
                        pos= 'absolute'
                        top= '40%'
                        right='0'
                        userSelect= 'none'
                        zIndex='2'
                        onClick={nextSlide}
                        bg='transparent'
                        borderRadius='none'
                        backgroundColor='rgba(38, 38, 38, 0.5)'
                        aria-label='siguiente imagen'
                        icon={<ChevronRightIcon color='brand.baseColor' w={10} h={10} />}
                        _hover={{ bg: 'brand.secondaryOrange', borderRadius:'none'}}
                        _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius:'none'}}
                        _focus={{ boxShadow: 'none', borderRadius:'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack'}}
                        />
            </Flex>
        </Flex>
    );
};
export default Slider;
