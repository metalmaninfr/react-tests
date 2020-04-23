import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const MainContainer = ({ children }) => (
    <Main data-testid="test-main">{children}</Main>
)

export default MainContainer;
