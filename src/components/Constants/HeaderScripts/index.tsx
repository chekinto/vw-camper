import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

interface HeaderScriptProps {
  pageMeta: {
    title: string;
    description: string;
    keywords?: Array<string>;
  }
}

export const HeaderScripts: FunctionComponent<HeaderScriptProps> = ({ pageMeta }) => {

  return (
    <Helmet>
      <title>{`VW Camper | ${pageMeta.title}`}</title>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(', ')} />
    </Helmet>
  )
}
