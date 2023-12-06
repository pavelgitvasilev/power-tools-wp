// libraries
import styled, { css } from 'styled-components';
// constants
import { COLORS, TRANSITION } from 'constants/settings';

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    transition: ${TRANSITION.fast};

    &:focus {
        outline: none;
    }

    ${({ variant }) => {
        switch (variant) {
            case 'positive':
                return css`
                    color: ${COLORS.white};
                    background: ${COLORS.positive};
                    border: none;

                    &:active,
                    &:hover,
                    &:focus {
                        opacity: 0.85;
                    }
                `;
            case 'outline':
                return css`
                    color: ${COLORS.dark};
                    background-color: transparent;
                    border: 1px solid currentColor;

                    &:active,
                    &:hover,
                    &:focus {
                        opacity: 0.85;
                    }
                `;
            case 'purple':
                return css`
                    color: ${COLORS.dark};
                    background: ${COLORS.purple};
                    border: none;

                    &:active,
                    &:hover,
                    &:focus {
                        opacity: 0.85;
                    }
                `;
            default:
                return css`
                    color: ${COLORS.white};
                    background-color: ${COLORS.dark};

                    &:active,
                    &:hover,
                    &:focus {
                        background-color: ${COLORS.darkSecondary};
                    }
                `;
        }
    }}

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
