import getMuiTheme from 'material-ui/styles/getMuiTheme';
import appStyle from './appStyle';

export default getMuiTheme({
  fontFamily: appStyle.fontFamilies.default,

  palette: {
    textColor: appStyle.colors.secondary,
    primary1Color: appStyle.colors.tertiary,
    accent1Color: appStyle.colors.primary,
  },
  appBar: {
    color: appStyle.colors.tertiary,
    height: '80px',
  },
  table: {
    backgroundColor: appStyle.colors.septenary,
  },
  tableRow: {
    hoverColor: appStyle.colors.quaternary,
    stripeColor: appStyle.colors.tertiary,
  },
  stepper: {
    iconColor: appStyle.colors.primary,
    inactiveIconColor: '#ECE5B7',
    connectorLineColor: appStyle.colors.primary,
  },
  textField: {
    textColor: appStyle.colors.tertiary,
  },
  checkbox: {
    checkedColor: appStyle.colors.quinary,
  },
  contentFontFamily: {},
});
