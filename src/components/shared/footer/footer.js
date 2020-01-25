import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    
    `)
    return(
        <footer>
            <p>Footer Content!{data.site.siteMetadata.title}</p>
        </footer>
    );
}

export default Footer;