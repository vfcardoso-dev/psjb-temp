import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

import Logo from "../components/Logo"
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import SEO from "../components/seo"

import * as S from "../components/Index/styled"

const IndexPage = () => {
    const { site: { siteMetadata: { title, description } } } =
    useStaticQuery(graphql`
        { site { siteMetadata { title, description } } }
    `)
    
    
    return (
        <Layout>
        <SEO title="Home" />

            <Link to="/">
                <Logo />
            </Link>        

            <S.IndexTitle>{title}</S.IndexTitle>
            <S.IndexDescription>{description}</S.IndexDescription>
        
            <SocialLinks />
        </Layout>
        )  
    }
    
    export default IndexPage
    