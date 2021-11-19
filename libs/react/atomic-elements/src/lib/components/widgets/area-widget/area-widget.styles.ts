import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  widgetContent: {
    height: 'calc(var(--wh-5XL) - var(--wh-1XS) - var(--wh-6XS) - var(--wh-6XS) + var(--wh-S))',
  },
  widgetMacroMicroContent: {
    height: 'calc(var(--wh-7XL) - var(--wh-4XS) - var(--pm-5XS))',
  },
});
