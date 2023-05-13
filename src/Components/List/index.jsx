import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Cards from "../Cards";


const List = () => {
  
  return (
    <Box>
      {lista.cargos.map((cargo, i) => {
        return (
          <Cards key={i} cargo={cargo}/>
            
          
        );
      })}
      <Btn>Ver mas</Btn>
    </Box>
  );
};

export default List;
