import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                margin: theme.spacing(2),
            },
        },
    }),
);

const ProgressIndicator = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary"/>
        </div>
    );
}

export default ProgressIndicator