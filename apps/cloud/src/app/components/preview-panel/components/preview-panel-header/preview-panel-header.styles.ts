import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  previewHeader: {
    alignItems: 'center',
    backgroundColor: 'hsla(var(--on-surface-color-hsl), 0.7)',
    borderRadius: 'var(--pm-3XS)',
    display: 'flex',
    height: 'var(--wh-3XS)',
    transition: 'height var(--speed-medium)',
    width: '100%',
    zIndex: 100,
    '&:hover': {
      height: 'var(--wh-S)',
      '& $previewHeaderActionsContainer': {
        opacity: 1,
      },
      '& $previewHeaderTitle': {
        fontSize: 'var(--tx-M)',
      },
    },
  },
  previewHeaderActionsContainer: {
    alignItems: 'center',
    display: 'flex',
    marginRight: 'var(--pm-1XS)',
    opacity: 0,
    position: 'absolute',
    right: 'var(--pm-0)',
    transition: 'opacity var(--speed-medium)',
  },
  previewHeaderCloseButton: {
    height: 'var(--wh-2XS)',
  },
  previewHeaderHandler: {
    color: 'var(--on-secondary-color-variant)',
    display: 'inline-block',
    fontSize: 'var(--pm-L)',
    fontWeight: 'bold',
    left: '50%',
    letterSpacing: 'var(--pm-6XS)',
    marginBottom: 'var(--pm-6XS)',
    position: 'absolute',
    transform: 'translate(-50%,0%)',
    '&:hover ': {
      '& ~ $previewHeader': {
        height: 'var(--wh-S)',
        '& $previewHeaderActionsContainer': {
          opacity: 1,
        },
      },
    },
  },
  previewHeaderTitle: {
    color: 'var(--on-secondary-color-variant)',
    fontSize: 'var(--tx-S)',
    marginLeft: 'var(--pm-L)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    transition: 'font-size var(--speed-medium)',
    whiteSpace: 'nowrap',
    width: 'var(--wh-7XL)',
  },
  previewHeaderWidgetCategoryDropdownButton: {
    color: 'var(--on-secondary-color-variant)',
    '&:hover ': {
      color: 'var(--on-secondary-color-variant)',
    },
  },
});
