import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

// styles
import './Bento.styles.scss';

// Components
import WorkCard from "../WorkCard/WorkCard.component";

export default function Bento() {
    const data = useStaticQuery(graphql`
        query WorkQuery {
            allMarkdownRemark (limit:4, sort: { frontmatter: {date: DESC} }) {
                edges {
                    node {
                        frontmatter {
                            title
                            company
                            slug
                            mainProdImage {
                                childImageSharp {
                                    gatsbyImageData(width: 954)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)


    return (
        <div className="bento">
            {
                data.allMarkdownRemark.edges.map(({node}) => (
                    <WorkCard
                        companyName={node.frontmatter.company}
                        projectTitle={node.frontmatter.title}
                        projectLink={node.frontmatter.slug}
                        workImage={getImage(node.frontmatter.mainProdImage.childImageSharp.gatsbyImageData)}
                    />
                ))
            }
        </div>
    )
}