import React, { useCallback } from "react"
import groupBy from "lodash/groupBy"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import ToggleButton from "@material-ui/lab/ToggleButton"
import makeStyles from "@material-ui/core/styles/makeStyles"
import last from "lodash/last"

import useColors from "../hooks/useColors"

const useStyles = makeStyles({
  colors: {
    width: "100%",
  },
  color: {
    padding: 0,
    width: "100%",
    height: 40,
  },
})

const BaseColors = () => {
  const { colors: alvColors, colorId, setColor } = useColors()
  const colors = groupBy(alvColors, "col")

  const handleColorChange = useCallback(
    (event, newColorCol) => {
      const newColor = alvColors.find(color => color.col === newColorCol)

      setColor(newColor.id)
    },
    [setColor, alvColors]
  )

  const currentColor = alvColors.find(color => color.id === colorId)

  const classes = useStyles()

  return (
    <ToggleButtonGroup
      value={currentColor.col}
      onChange={handleColorChange}
      exclusive
      className={classes.colors}
      size="large"
    >
      {Object.keys(colors).map(colorId => {
        const mainColor = last(colors[colorId])

        return (
          <ToggleButton
            key={mainColor.col}
            value={mainColor.col}
            className={classes.color}
          >
            <span
              style={{
                backgroundColor: mainColor.backgroundColor,
                color: mainColor.textColor,
              }}
            >
              A
            </span>
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  )
}

export default BaseColors
