import * as React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import useColors from '../hooks/useColors';

type ClassProps = {
  backgroundColor?: string;
  color?: string;
};

const useStyles = makeStyles<Theme, ClassProps>((theme) => ({
  currentColor: ({ backgroundColor, color }) => ({
    backgroundColor: backgroundColor || theme.palette.background.paper,
    color: color || theme.palette.text.primary,
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
}));

const getColorAsString = (color: AvlColor): string => `C${color.col}${color.int}${color.inv}`;

const CurrentColor = (): JSX.Element => {
  const { colors, colorId } = useColors();
  const currentColor = colors.find((color) => color.id === colorId);

  const classes = useStyles({
    backgroundColor: currentColor?.backgroundColor,
    color: currentColor?.textColor,
  });

  return (
    <Box className={classes.currentColor}>
      {currentColor ? getColorAsString(currentColor) : 'Не выбран цвет'}
    </Box>
  );
};

export default CurrentColor;
