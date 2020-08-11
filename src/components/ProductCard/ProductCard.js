import React,{Component} from 'react';
import styled from "styled-components";
import Product from "./Product/Product";

function ProductCardComponent(props) {
    return (
        <ProductCard>
            <ProductCardTitle>{props.productInfo.title}</ProductCardTitle>
            {props.productInfo.info.map((item,index)=>{
                   return (
                       <Product key={index} info={item}/>
                   )
                })}
        </ProductCard>
    )
}


const ProductCard = styled.div`
background-color: #fff;
border-radius: 24px;
max-width: 375px;
width: 100%;
padding-left: 32px;
padding-right: 32px;
padding-top: 32px;
padding-bottom: 26px;`;
const ProductCardTitle = styled.h3`
margin-top: 0;
font-weight: 600;
font-size: 24px;
letter-spacing: 0.25px;
color: #12121F;
margin-bottom: 24px;`;


export default ProductCardComponent;