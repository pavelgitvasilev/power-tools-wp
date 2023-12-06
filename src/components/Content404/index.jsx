// libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
// components
import { BREAKPOINT, Container, Col, Row } from 'components/UI/Grid';
import { Button } from 'components/UI/Button';
// constants
import { COLORS } from 'constants/settings';
// static
import { Astro, Circle } from 'assets/icons/icons';

export const Content404 = () => {
    return (
        <StyledContent404>
            <Container>
                <Row>
                    <StyledInfo xs={12} lg={7}>
                        <StyledTitle>
                            ¡Ups!
                            <br />
                            <span>No encontramos la&nbsp;página que buscas</span>
                        </StyledTitle>
                        <StyledDescription>
                            Es posible que se haya eliminado o movido a otro sitio.
                            <br /> ¡Lo sentimos!
                        </StyledDescription>
                        <StyledButton as={Link} variant="prime" to="/">
                            Volver al Inicio
                        </StyledButton>
                    </StyledInfo>
                    <StyledBGWrapper xs={12} lg={6}>
                        <StyledBG>
                            <Circle />
                            <Astro />
                        </StyledBG>
                    </StyledBGWrapper>
                </Row>
            </Container>
        </StyledContent404>
    );
};

const StyledContent404 = styled.div`
    position: relative;
    padding-top: 94px;
    background: ${COLORS.secondary};

    ${BREAKPOINT.md} {
        min-height: 760px;
        padding-top: 130px;
        overflow: hidden;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(1turn);
        }
    }
    @keyframes flo {
        50% {
            transform: translateY(25px);
        }
    }
`;

const StyledInfo = styled(Col)`
    position: relative;
    z-index: 1;
`;

const StyledTitle = styled.h1`
    margin: 0;
    line-height: 1;

    ${BREAKPOINT.lg} {
        line-height: 1.3;
    }

    span {
        display: inline-block;
        padding-top: 32px;
        font-size: 20px;
        letter-spacing: 0.5px;

        ${BREAKPOINT.lg} {
            padding-top: 22px;
            font-size: 28px;
            letter-spacing: 1px;
        }
    }
`;

const StyledDescription = styled.p`
    padding: 28px 0;
    font-size: 18px;
    line-height: 1.4;

    ${BREAKPOINT.lg} {
        padding: 20px 0;
        font-size: 24px;
        letter-spacing: 0.5px;
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
    padding: 14px;

    ${BREAKPOINT.md} {
        max-width: 230px;
    }
`;

const StyledBGWrapper = styled.div`
    margin: auto;
    padding: 42px 0 54px;

    ${BREAKPOINT.lg} {
        position: absolute;
        top: 5%;
        left: 50%;
        padding: 8px 0 0;
    }
`;

const StyledBG = styled.div`
    position: relative;
    width: 95%;
    margin: auto;

    .circle {
        display: block;
        width: 100%;
        height: unset;

        ${BREAKPOINT.lg} {
            padding-top: 45px;
            animation: rotate 120s infinite;
        }
    }

    .astro {
        position: absolute;
        bottom: -5%;
        display: block;
        max-width: 100%;
        height: unset;

        ${BREAKPOINT.lg} {
            animation-name: flo;
            animation-duration: 8s;
            animation-iteration-count: infinite;
        }
    }

    .astro-1 {
        ${BREAKPOINT.lg} {
            animation-name: flo;
            animation-duration: 15s;
            animation-iteration-count: infinite;
        }
    }
`;
