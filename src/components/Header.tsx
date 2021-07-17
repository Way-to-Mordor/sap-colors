import * as React from 'react';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textDecoration: 'none',
  },
}));

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const classes = useStyles();

  return (
    <Container className={classes.header} component="header">
      <Container maxWidth="md">
        <Typography variant="h3" component="h1">
          <Link className={classes.link} to="/">
            {siteTitle}
          </Link>
        </Typography>
      </Container>
    </Container>
  );
};

export default Header;
