import React,{ useState } from "react";
import styled from "@emotion/styled";

const BasePainel = styled.div`
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    width: 260px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    }

`;

const NomeProduto = styled.h3`
    font-size: 1.1rem;
    color: #333333;
    margin: 0;
    font-weight: 600;

`;

const PrecoProduto = styled.span`
    font-size: 1.25rem;
    color: #333333;
    font-weight: bold;
`;

const BotaoCarrinho = styled.button`
    background-color: ${({ adicionado }) => (adicionado ? '#198754' : '#6c757d')};
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        transform: scale(0.98);
    }
`;

export function CardProduto({nome, preco}){
    const [adicionado, setAdicionado] = useState(false);
    
    const handleToggleCarrinho = () => {
        setAdicionado((prev) => !prev);
    };


    return(
        <BasePainel>
        <NomeProduto>{nome}</NomeProduto>
        <PrecoProduto>R$ {preco.toFixed(2)}</PrecoProduto>
        <BotaoCarrinho adicionado={adicionado} onClick={handleToggleCarrinho}>
            {adicionado ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
        </BotaoCarrinho>    
        </BasePainel>
    );
}