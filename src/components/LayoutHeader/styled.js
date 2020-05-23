import styled from "styled-components"
import media from 'styled-media-query'
import Link from 'gatsby-link'

export const LayoutHeaderLink = styled(Link)`
    text-decoration: none;
    transition: color 0.5s ease 0s;
    
    &:hover {
        color: var(--highlight);
    }
`

export const LayoutHeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    transition: color 0.5s ease 0s;
    margin: 0 auto 2.25rem;
`

export const LayoutHeaderTitle = styled.h3`
    font-size: 3.5rem;
    color: var(--titleColor);
    font-weight: 800;
    font-family: "Work Sans";

    ${media.lessThan("large")`
        font-size: 2.825rem;
    `}
`