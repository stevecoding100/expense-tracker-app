import styled from "styled-components";

export const Mainlayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    @media only screen and (max-width: 600px) {
        padding: 1rem;
        flex-direction: column;
    }
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
`;
