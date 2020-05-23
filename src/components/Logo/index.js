import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from './styled'

const Logo = () => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "brasao.png" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
      <S.ImageWrapper>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </S.ImageWrapper>
    )
}

export default Logo
