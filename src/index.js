import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import Card from "./Card";

function App() {
  const dataList = [
    {
      id: "1",
      full_name: "Ana Cristina"
    },
    {
      id: "2",
      full_name: "Ana Cristina"
    }
  ];

  return (
    <ChakraProvider>
      <Container alignContent minW="328px" centerContent>
        <SimpleGrid columns={[2, 2]}>
          {dataList.map(function (data) {
            const { id, full_name, description } = data;
            return (
              <Card
                key={id}
                full_name={full_name}
                description={description}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
