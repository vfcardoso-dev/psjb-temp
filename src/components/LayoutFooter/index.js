import React from 'react'

import * as S from './styled'

const LayoutFooter = () => {
    return (
        <S.LayoutFooterWrapper>
            <S.LayoutFooterCopyright>
                © {new Date().getFullYear()}
            </S.LayoutFooterCopyright>
        </S.LayoutFooterWrapper>
    )
}

export default LayoutFooter