import styled from 'styled-components'
import media from 'styled-media-query'

export const ImageWrapper = styled.div`
    max-width: 350px;
    margin: 0 auto;

    ${media.lessThan("large")`
        max-width: 350px;
    `}
`