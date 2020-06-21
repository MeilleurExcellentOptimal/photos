import { graphql } from "gatsby"
import _map from "lodash/map"
import _uniqueId from "lodash/uniqueId"
import React from "react"
import "react-medium-image-zoom/dist/styles.css"
import Photo from "../components/Photo"
import SEO from "../components/seo"
import "./index.css"

class IndexPage extends React.Component {
  render() {
    const images = this.props.data.allFile.edges

    return (
      <div className="container">
        <SEO title="Valentin" />
        <h1>Valentin</h1>
        {_map(images, image => (
          <Photo
            key={_uniqueId()}
            fluid={image.node.childImageSharp.fluid}
            alt={image.name}
          />
        ))}
      </div>
    )
  }
}

export const IndexQuery = graphql`
  query IndexQuery {
    allFile(
      filter: { extension: { eq: "jpg" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 4016) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`

export default IndexPage
