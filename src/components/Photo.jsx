import Img from "gatsby-image"
import { bool, object } from "prop-types"
import React from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import styles from "./photo.css"

const wrapperStyle = {
  width: "100%",
  height: "100%",
}

const Image = ({ fluid, alt, isZoomable }) => {
  return fluid && isZoomable ? (
    <Zoom className={styles.ZoomableMedia}>
      <Img style={wrapperStyle} fluid={fluid} alt={alt} />
    </Zoom>
  ) : (
    <Img fluid={fluid} alt={alt} />
  )
}

Image.defaultProps = {
  isZoomable: true,
}

Image.propTypes = {
  fluid: object,
  isZoomable: bool,
}

export default Image
