export default theme => ({
    root: {
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    logoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '63px',
      flexShrink: 0
    },
    logoText: {
      color:theme.palette.primary.dark
    },
    logoLink: {
      fontSize: 0
    },
    logoImage: {
      cursor: 'pointer'
    },
    listItem: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        borderRadius: '4px',
        '& $listItemIcon': {
          color: theme.palette.primary.main,
          marginLeft: '-4px'
        }
      },
      '& + &': {
        marginTop: theme.spacing(0)
      }
    },
    activeListItem: {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '4px',
      backgroundColor: theme.palette.primary.light,
      '& $listItemText': {
        color: theme.palette.text.primary
      },
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      }
    },
    listItemIcon: {
      marginRight: 0
    },
    listItemText: {
      fontWeight: 500,
      color: theme.palette.text.secondary
    },
    listDivider: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  });
  