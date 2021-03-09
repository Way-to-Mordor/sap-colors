import React, { useCallback } from "react"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import ToggleButton from "@material-ui/lab/ToggleButton"
import makeStyles from "@material-ui/core/styles/makeStyles"

import useColors from "../hooks/useColors"

const useStyles = makeStyles({
  colors: {
    width: "100%",
    height: 40,
  },
  color: {
    padding: 0,
    width: "100%",
    height: 40,
  },
})

const Colors = () => {
  const { colors, colorId, setColor } = useColors()
  const classes = useStyles()
  const currentColor = colors.find(color => color.id === colorId)
  const currentColorCol = currentColor.col
  const currentColors = colors.filter(color => color.col === currentColorCol)

  const handleChange = useCallback(
    (event, newColorId) => { if ( newColorId !== null ) { setColor( newColorId) } },
    [setColor]
  )

  return (
    <ToggleButtonGroup
      value={colorId}
      onChange={handleChange}
      className={classes.colors}
      exclusive
    >
      {currentColors.map(color => (
        <ToggleButton key={color.id} value={color.id} className={classes.color}>
          <span
            style={{
                backgroundColor: color.backgroundColor,
                color: color.textColor,
            }}
          >
            A
          </span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default Colors
