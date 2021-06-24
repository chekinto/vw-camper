import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Wrapper, H2 } from 'components'

export const OurStory = () => {
  const { graphcms } = useStaticQuery(graphql`
    query {
      graphcms {
        section (where:{id:"ckpyjhejcbj4z0b61bc8mbgi0"}) {
          title
        }
      }
    }
  `)

  return (
    <Wrapper pt={16} pb={56} bg="gray.200">
      <H2 textAlign="center">{graphcms.section.title}</H2>
    </Wrapper>
  )
}
