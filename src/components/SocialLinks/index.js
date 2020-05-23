import React from 'react'

import icons from './icons'
import links from './content'

import * as S from './styled'

const SocialLinks = () => (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {links.filter(x => x.active).map((link, i) => {
                    const Icon = icons[link.label];

                    return (
                        <S.SocialLinksItem key={i}>
                            <S.SocialLinksExternalLink
                                href={link.url}
                                title={link.label}
                                target="_blank"
                                rel="noopener noreferrer">
                                <S.IconWrapper>
                                    <Icon />
                                </S.IconWrapper>
                            </S.SocialLinksExternalLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
)

export default SocialLinks 