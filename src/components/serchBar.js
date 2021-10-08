import { Stack, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import React, { useState } from 'react';
import JSONDATA from '../MOCK_DATA.json';

function SerchBar() {
  const token = '27ad5718aebe31986ce9099abd34cd';
  fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: 'query Myquery {allCards{title body {value}}}'
      }),
    }
  )
    .then(res => res.json())
    .then((res) => {
      console.log(res.data.allCards[0].body.value.document.children[0].children[0].value)
    })
    .catch((error) => {
      console.log(error);
    });
  const [serchTerm, setSerchTerm] = useState('')
  return (
    <div>
      <Stack spacing={4} w="100%" h="100%" m="0 auto" pt="100px">
        <InputGroup w={{base:"328px", md:"80%", lg:"50%"}} m="0 auto" bg="brand.baseColor">
          <Input variant='outline' placeholder="Busca Artistas  " size="lg" w="100%" borderWidth="5px" borderColor="brand.secondaryGray" borderRadius="0" onChange={event => { setSerchTerm(event.target.value) }} />
          <InputRightElement width="15px" mr="15px" mt="5px" children={<BsSearch/>} />
        </InputGroup>
      </Stack>
      <Stack spacing={4} w="100%" h="100%" m="0 auto" pt="100px" textAlign="center">
        {JSONDATA.filter((val) => {
          if (serchTerm === "") {
            return val
          } else if (val.first_name.toLocaleLowerCase().includes(serchTerm.toLocaleLowerCase())) {
            return val
          }
          return '';
        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.first_name}</p>
            </div>)
        })}
      </Stack>
    </div>
  );
}

export { SerchBar };