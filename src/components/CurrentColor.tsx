import * as React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme  } from '@material-ui/core/styles/createMuiTheme';

import useColors from '../hooks/useColors'

type classProps = {
    backgroundColor: string;
    color: string;
}

const useStyles = makeStyles<Theme, classProps>({
    currentColor: ({ backgroundColor, color }) => ({
        backgroundColor,
        color,
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
})


const CurrentColor = (): JSX.Element => {
    const { colors, colorId } = useColors()
    const currentColor = colors.find(color => color.id === colorId)

    const classes = useStyles({
        backgroundColor: currentColor.backgroundColor,
        color: currentColor.textColor,
    })

    return (
        <Box className={classes.currentColor}>
            C{currentColor.col}{currentColor.int}{currentColor.inv}
        </Box>
    )
}

export default CurrentColor
