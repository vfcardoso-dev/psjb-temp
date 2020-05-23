import styled from 'styled-components'
import media from "styled-media-query"

import Link from 'gatsby-link'

export const SocialLinksWrapper = styled.nav`
    margin: .75rem auto 1rem;
    width: 100%;
    justify-content: center;
    display: flex;
`

export const SocialLinksList = styled.ul`
    display: flex;
    justify-items: start;
    list-style: none;
`

export const SocialLinksItem = styled.li`
    margin-right: .25rem;

    ${media.lessThan("large")`
        margin-right: .5rem;
    `}
`

export const SocialLinksExternalLink = styled.a`
    color: var(--vermelho);
    text-decoration: none;
    transition: color 0.5s ease 0s;
    
    &:hover {
        color: var(--ocre);
    }
`

export const SocialLinksInternalLink = styled(Link)`
    color: var(--vermelho);
    text-decoration: none;
    transition: color 0.5s ease 0s;
    
    &:hover {
        color: var(--vermelho);
    }
`

export const IconWrapper = styled.div`
    fill: #bbb;
    width: 24px;
    height: 24px;

    ${media.lessThan("large")`
        width: 30px;
        height: 30px;
    `}
`