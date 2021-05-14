import {Menu, MenuItem} from "@material-ui/core";
import { MenuProps, withStyles } from "@material-ui/core";

export const StyledMenu = withStyles({
    paper: {
        border: `0.2px solid #808080`,
        borderRadius: '0px',
        borderTop: 'none',
        opacity: '0.2',
        width: 266

    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export const StyledMenuItem = withStyles((theme) => ({
    root: {
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            minWidth: "28px",
            position: 'relative'
        },
        '&:hover': {
            backgroundColor: theme.palette.action.selected,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.text.primary,
            },
        },
    },
}))(MenuItem);

