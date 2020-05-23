import styled from "styled-components"
import media from "styled-media-query"

export const IndexTitle = styled.h1`
    font-size: 2rem;
    line-height: 2.275rem;
    font-weight: 700;
    text-align: center;
    margin: 3rem auto 2rem;

    ${media.lessThan("large")`
        font-size: 1.675rem;
    `}
`

export const IndexDescription = styled.h2`
    font-size: 1rem;
    text-align: center;
    line-height: 1.275rem;

    ${media.lessThan("large")`
        font-size: .875rem;
    `}
`