import {  createTheme } from '@mui/material/styles';
import {  responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
    palette:{
        // background: {
        //     default: "#050517",
        //   },
        primary : {
            main: '#ffcc00'
        },
        secondary : {
            main : '#08203a'
        },
        background : {
            default : '#f7f7f7'
        }

    }
})

theme = responsiveFontSizes(theme);
// export default theme;
export default theme