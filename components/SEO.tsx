import React from 'react'
import Head from 'next/head'


const SEO = ({title} : {title : string}) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

       
      <title>Rohit Jakhar — {title}</title>
      <meta name="title" content={`Rohit Jakhar — ${title}`}/>
      <meta name="description" content="Android Developer."/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://rohitjakhar.me/"/>
      <meta property="og:title" content={`Rohit Jakhar — ${title}`}/>
      <meta property="og:description" content="Android Developer."/>
      <meta property="og:image" content="https://github.com/rohitjakhar/rohitjakhar/blob/master/Rohit%20Jakhar%20Banner.png?raw=true"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://twitter.com/rohitjakhar0"/>
      <meta property="twitter:title" content={`Rohit Jakhar — ${title}`}/>
      <meta property="twitter:description" content="Android Developer."/>
      <meta property="twitter:image" content="https://github.com/rohitjakhar/rohitjakhar/blob/master/Rohit%20Jakhar%20Banner.png?raw=true"></meta>
    </Head>
  )
}

export default SEO