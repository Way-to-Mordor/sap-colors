import { useMemo } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { useAtom, useAction } from "@reatom/react"
import first from 'lodash/first'

import { colorAtom, setColor as setColorAction } from "../store"

type colorsQueryResult = {
  allAlvColorsJson: {
    edges: { node: AvlColor }[]
  }
}

const useColors = () => {
  const alvColorsNodes = useStaticQuery<colorsQueryResult>(
    graphql`
      query alvColors {
        allAlvColorsJson {
          edges {
            node {
              id
              col
              int
              inv
              backgroundColor
              textColor
            }
          }
        }
      }
    `
  ).allAlvColorsJson.edges

  const colors = useMemo(() => alvColorsNodes.map(colorNode => colorNode.node), [alvColorsNodes])
  const colorId = useAtom(colorAtom, currentColor => currentColor ?? first(colors).id, [colors])

  const setColor = useAction(setColorAction)

  return {
    colors,
    colorId,
    setColor,
  };
}

export default useColors
