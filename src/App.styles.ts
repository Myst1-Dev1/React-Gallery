import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282f;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;

    @media(max-width:320px) {
        max-width: 100%;
    }
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
`;

export const ScreenWarning = styled.div`
   text-align: center;


   .emoji {
    font-size: 50px;
    margin-bottom: 20px;
   }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:10px;

    @media (max-width:750px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;


    @media(max-width:320px) {
        padding: 10px 2px;
    }

    input[type=submit] {
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    @media(max-width:750px) {
        input[type=submit] {
            margin-top: 10px;
        }
    }
`;