import React from "react";
import styled from "styled-components";

const PizzaCardContainer = styled.div`
    max-width: 20vw;
    max-height:  25vh;

`

type PizzaCardType = {
    data: {
        img: string;
        productName: string;
        productIngredients: string[];
    }
}
// export function PizzaCards({data}: PizzaCardType){
    
//     return(
//         <PizzaCardContainer>


//         </PizzaCardContainer>
//     )
// } 