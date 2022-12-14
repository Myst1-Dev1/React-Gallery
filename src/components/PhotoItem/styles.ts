import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    position: relative;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    .delete {
        cursor: pointer;
        color: #FF0000;
        font-size: 17px;
        position: absolute;
        bottom: 10px;
        right: 5px;
    }
`