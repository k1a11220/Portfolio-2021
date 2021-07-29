import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 100%;

    --width: 1200px;

    --grid-gap-sm: 10px;
    --grid-gap-md: 24px;
    --grid-gap-lg: 36px;

    --padding-sm: 16px;
    --padding-md: 20px;
    --padding-lg: 32px;

    --border-radius: 8px;

    --text-xs: 0.625rem;
    --text-sm: 0.75rem;
    --text-base: 1rem;
    --text-md: 1.125rem;
    --text-title: 1.25rem;
    --text-lg: 1.5rem; 
    --text-xl: 3rem;

    body.light {
        --color-text: #1d1d1d;
        --color-text-2: #a1a1a1;
        --color-text-3: #086BCE;
    }
}
`;

export default GlobalStyle;
