import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"

import LayoutHeader from '../LayoutHeader'
import LayoutFooter from '../LayoutFooter'

import * as S from './styled'

const Layout = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />

            <LayoutHeader />

            <S.LayoutMain>{children}</S.LayoutMain>
            
            <LayoutFooter />
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout