import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    background: #fff;
    padding: 16px;
    width: 100%;
`;

const ContentContainer = ({ children }) => (
    <Content data-testid="test-content">{children}</Content>
)

export default ContentContainer;
