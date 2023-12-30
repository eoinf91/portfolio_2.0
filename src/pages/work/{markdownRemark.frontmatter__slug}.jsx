import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

// Styles
import '../../styles/index.styles.scss';
import '../../styles/main.styles.scss';

// Components
import PFheader from "../../components/PFheader/PFheader.component";
import Footer from "../../components/Footer/Footer.component";
import PageIntro from "../../components/PageIntro/pageIntro.component";
import CSDetail from "../../components/csDetail/csDetail.component";
import FeatureImage from "../../components/FeatureImage/featureImage.component";
import CSContent from "../../components/csContent/csContent.component";
import FolioBTN from "../../components/FolioBTN/FolioBTN.component";
import ImageGrid from "../../components/ImageGrid/ImageGrid.component";

export default function WorkPageTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const mainProdImage = getImage(frontmatter.mainProdImage.childImageSharp.gatsbyImageData)
  const imageGrid01 = getImage(frontmatter.imageGrid01.childImageSharp.gatsbyImageData)
  const imageGrid02 = getImage(frontmatter.imageGrid02.childImageSharp.gatsbyImageData)
  const imageGrid03 = getImage(frontmatter.imageGrid03.childImageSharp.gatsbyImageData)
  const location = useLocation();
  return (
    <main>
      <PFheader 
        pagePath={location.pathname}
      />
      <PageIntro
        introHeader = {frontmatter.title}
        introSubheader = {frontmatter.company}
        introPara = {frontmatter.introPara}
      />
      <CSDetail 
        csWhen = {frontmatter.when}
        csRole = {frontmatter.role}
      />
      <FeatureImage 
        prodImage = {mainProdImage}
      />
      <CSContent 
        content={html}
      />
      <ImageGrid 
        gridImage01 = {imageGrid01}
        gridImage02 = {imageGrid02}
        gridImage03 = {imageGrid03}
      />
      {
        frontmatter.figmaLink != null ?
          <FolioBTN 
            linkURL = {frontmatter.figmaLink}
          /> :
          null
      }
      <Footer />
    </main>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date
        slug
        title
        company
        introPara
        when
        role
        figmaLink
        mainProdImage {
          childImageSharp {
            gatsbyImageData(width: 954)
          }
        }
        imageGrid01 {
          childImageSharp {
            gatsbyImageData(width: 954)
          }
        }
        imageGrid02 {
          childImageSharp {
            gatsbyImageData(width: 954)
          }
        }
        imageGrid03 {
          childImageSharp {
            gatsbyImageData(width: 954)
          }
        }
      }
    }
  }
`

export const Head = ({data}) => <title>{data.markdownRemark.frontmatter.title} - {data.markdownRemark.frontmatter.company}</title>