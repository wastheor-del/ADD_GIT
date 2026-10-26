import React from "react";
import styled from "@emotion/styled";
import { CardProduto } from './BaseProd';

const AppBase = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
`;


export default function App(){
    return(
        <AppBase>
            <CardProduto
                nome="Fone de Oucvido Bluetooth"
                preco={149.90}
            
            />
        </AppBase>
    );
}