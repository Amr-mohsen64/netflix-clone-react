import styled from 'styled-components/macro'

export const Item = styled.section`
    display:flex;
    border-bottom:8px solid #222;
    padding:50px 5%;
    color:white;
    overflow:hidden;
`

export const Inner = styled.div`
    display:flex;
    align-items:center;
    flex-direction:${({ direction }) => direction};
    justify-content:space-between;
    max-width:1100px;
    margin:auto;
    width:100%;

    @media(max-width:1000px){
        flex-direction:column;
    }

`;

export const Pane = styled.div`
    width:50%;

    @media(max-width:1000px){
        text-align: center;
        width: 100%;
        padding: 0 45p
    }
`;

export const Title = styled.h1`
    line-height: 1.1;
    font-size: 50px;

    @media(max-width:600px){
        font-size:18px
    }

`;

export const SubTitle = styled.h2`
    line-height: normal;
    font-weight: normal;
    font-size: 26px;

    @media(max-width:600px){
        font-size:18px
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Container = styled.div``;
