import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({title}) => {
    const siteTitle = "Nigel Huang";
    const siteDescription = "Personal website of Nigel Huang, Ryerson University (Toronto, ON) Computer Engineering 2022";
    const siteCreator = "@nigel_uno5";
    return (
      <Helmet>
          <title>{siteTitle}</title>
          <meta name="description"
                content={siteDescription}/>
              <meta property="og:title" content="Home"/>
                  <meta property="og:description"
                        content={siteDescription}/>
                      <meta property="og:type" content="website"/>
                          <meta name="twitter:card" content="summary"/>
                              <meta name="twitter:creator" content={siteCreator}/>
                                  <meta name="twitter:title" content="Home"/>
                                      <meta name="twitter:description"
                                            content={siteDescription}/>
      </Helmet>
    );
}
export default SEO;