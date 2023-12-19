// libraries
import { createGlobalStyle } from 'styled-components';
// constants
import { COLORS } from 'constants/settings';
import { BREAKPOINT } from 'components/UI/Grid';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    #fc_frame,
    #fc_frame.fc-widget-normal {
        right: 10px !important;
        bottom: 88px !important;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        color: ${COLORS.dark};
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        line-height: 1.5;

        &.hidden {
            overflow: hidden;
        }
    }

    button,
    input,
    select,
    textarea {
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }

    h1,
    h2,
    h3 {
        margin: 0;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: 1px;
    }

    h1 {
        font-size: 32px;
        ${BREAKPOINT.lg} {
            font-size: 48px;
        }
    }

    h2 {
        font-size: 28px;
        ${BREAKPOINT.lg} {
            font-size: 34px;
        }
    }

    h3 {
        font-size: 20px;
        ${BREAKPOINT.lg} {
            font-size: 28px;
        }
    }

    strong {
        font-weight: 900;
    }

    .grecaptcha-badge {
        visibility: hidden;
    }
`;
