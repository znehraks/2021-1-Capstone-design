import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        @media(max-width: ${(props) => props.theme.mobileMaxWidth}){

            img{
            pointer-events: none;
        }
        };
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        color: black;
        font-size: 14px;
        font-family: 'Julius Sans One'
        ;
        ::-webkit-scrollbar{
            display: none;
        }
        -ms-overflow-style: none; 
        min-height: 650px;
        
    }
    a{
        color: ${(props) => props.theme.lightGreyColor};
        text-decoration: none;
        :focus{
            outline: none;
        }
    }
    input:focus{
        outline: none;
    }
    button:focus{
        outline: none;
    }
`;
