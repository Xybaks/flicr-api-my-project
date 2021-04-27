import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";

type MyAlertPropsType = {
    isOpen: boolean
    errorMessage: string
}
const useStyles = makeStyles({
    root: {
        maxWidth: "230px",
    },
    label: {maxWidth: "100%"},
});
export default function MyAlert(props: MyAlertPropsType) {

    const [open, setOpen] = React.useState(props.isOpen);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const classes = useStyles();
    return (
            <Snackbar className={classes.root}
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                      }}
                      open={open}
                      autoHideDuration={3000}
                      onClose={handleClose}
                      message={props.errorMessage}
                      action={<IconButton
                          className={classes.label} size="small"
                          aria-label="close"
                          color="inherit"
                          onClick={handleClose}>
                                  <CloseIcon fontSize="small"/>
                              </IconButton>
                      }
            />
    );
}
