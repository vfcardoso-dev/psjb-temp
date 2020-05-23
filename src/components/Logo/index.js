import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from './styled'

const Logo = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "brasao.png" }) {
            childImageSharp {
                fixed(width: 350) {
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }
    }
    `
    )
    
    return (
        <S.ImageWrapper>
            <Img fixed={data.placeholderImage.childImageSharp.fixed} backgroundColor="true" />
        </S.ImageWrapper>
        )
    }
    
    export default Logo
    