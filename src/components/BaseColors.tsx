import React, { useCallback } from 'react';
import groupBy from 'lodash/groupBy';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import last from 'lodash/last';
import isNil from 'lodash/isNil';

import useColors from '../hooks/useColors';

const useStyles = makeStyles({
  colors: {
    width: '100%',
  },
  color: {
    padding: 0,
    width: '100%',
    height: 40,
  },
});

const BaseColors = (): React.ReactElement => {
  const { colors: alvColors, colorId: currentColorId, setColor } = useColors();
  const colors = groupBy(alvColors, 'col');

  const handleColorChange = useCallback(
    (event, newColorCol) => {
      const newColor = alvColors.find((color) => color.col === newColorCol);

      if (!isNil(newColorCol) && newColor) {
        setColor(newColor.id);
      }
    },
    [setColor, alvColors],
  );

  const currentColor = alvColors.find((color) => color.id === currentColorId);

  const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={currentColor?.col}
      onChange={handleColorChange}
      exclusive
      className={classes.colors}
      size="large"
    >
      {Object.keys(colors).map((colorId) => {
        const mainColor = last(colors[colorId]);

        return mainColor ? (
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
        ) : null;
      })}
    </ToggleButtonGroup>
  );
};

export default BaseColors;
