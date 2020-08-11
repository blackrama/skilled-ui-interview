import React,{Component} from 'react';
import styled from "styled-components";

function Card(props) {
    return (
      <CardComponent>
          <CardHeader>
              <CardDeveloper>
                  <CardDeveloperLogo>
                    <CardDeveloperLogoImg src={props.cardInfo[0].src}></CardDeveloperLogoImg>
                    </CardDeveloperLogo>
                  <CardDeveloperInfo>
                    <div>{props.cardInfo[0].name}</div>
                      <CardPosition>{props.cardInfo[0].position}</CardPosition>
                  </CardDeveloperInfo>
                  <CardClose href="#"></CardClose>
              </CardDeveloper>
                <CardText>{props.cardInfo[0].text}</CardText>
          </CardHeader>
          <CardFooter>
              <CardForm>
                  <CardInput placeholder="Type your message..."></CardInput>
                  <CardSubmit>Send</CardSubmit>
              </CardForm>
          </CardFooter>
      </CardComponent>  
    )
}




const CardComponent = styled.div`
border-radius: 24px;
overflow: hidden;
max-width: 375px;
margin-top: 20px;
margin-bottom: 20px;
width: 100%;`;
const CardHeader = styled.header`
background-color: #4643D3;
color: #fff;
padding: 22px 32px;`;
const CardDeveloper = styled.div` 
display: flex;
align-items: center;
position: relative;`;
const CardDeveloperInfo = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
letter-spacing: 0.25px;
`;
const CardClose = styled.a`
position: absolute;
top:0;
right: 0;
z-index: 2;
width: 13px;
height: 13px;
background-image: url("../../img/Icon_Close.png");
transition: .3s opacity ease;
&:hover {
    opacity: .6;
}`;
const CardPosition = styled.div`
font-size: 14px;
line-height: 17px;
opacity: .5;
text-align:left;
`;
const CardDeveloperLogo = styled.div`margin-right: 15px;`;
const CardDeveloperLogoImg = styled.img`
min-width: 48px;
min-height: 48px;
height: 48px;
width: 48px;
border-radius: 50%;
object-fit: cover;`;
const CardText = styled.div`
font-size: 16px;
line-height: 24px;
margin-top: 17px;
text-align:left;`;
const CardFooter = styled.div`background-color: #fff;`;
const CardForm  = styled.form`
background-color: transparent;
display: flex;
padding-top: 16px;
padding-left: 32px;
padding-right: 32px;
padding-bottom: 16px;
justify-content: space-between;
`;
const CardInput = styled.input`
background-color: transparent;
border:none;
outline: none;
width: 100%;
font-size: 15px;
letter-spacing: 0.25px;
height: 24px;`;
const CardSubmit = styled.button`
background-color: transparent;
border:none;
cursor: pointer;
font-weight: 600;
font-size: 15px;
color: #5856D7;
transition: .3s opacity ease;
outline: none;
&:hover {
    opacity:.6;
  }
`;




export default Card;