import React,{Component} from 'react';
import styled from "styled-components";

function ProductComponent(props){
    return (
        <Product>
            <ProductImg src={props.info.src}></ProductImg>
            <div>
                <ProductModel>{props.info.model}</ProductModel>
                <ProductBrand>{props.info.brand}</ProductBrand>
                <ProductPrice>{props.info.price}</ProductPrice>
            </div>
        </Product>
    )
}



const Product = styled.div`
border-radius: 24px;
padding: 13px 18px;
display: flex;
align-items: center;
background-color: #fff;
margin-bottom: 8px;
transition: .3s background-color ease;
width: 100%;
&:hover {
    background-color: #FEF2EE; 
}`;
const ProductImg = styled.img`
min-width: 94px;
min-height: 94px;
height: 94px;
width: 94px;
object-fit: contain;
margin-right: 24px;
`;
const ProductModel = styled.div`
color: #FE805C;
font-weight: 600;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
margin-bottom: 11px;
`;
const ProductBrand = styled.div`
font-size: 12px;
line-height: 16px;    
letter-spacing: 0.25px;
color: #AFAFBD;
margin-bottom: 9px;
`;
const ProductPrice = styled.div`
font-weight: 600;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.25px;
color: #12121F;
`;


export default ProductComponent;