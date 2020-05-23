import styled from "styled-components"

export const LayoutFooterLink = styled.a`
     text-decoration: none;
     transition: color 0.5s ease 0s;
     color: var(--vermelho);

     &:hover {
         color: var(--ocre);
     }
 `

export const LayoutFooterWrapper = styled.footer`
    color: var(--texts);
    font-size: .85rem;
    margin: 1.175rem 0 0;
    transition: color 0.5s ease 0s;
    text-align: center;
`

export const LayoutFooterCopyright = styled.div``