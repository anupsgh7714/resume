import { createTheme } from "@mui/material";
import todoV2 from "../../assets/images/todo-v2db.png";
import ables from "../../assets/images/ables-charity.png";
import blog from "../../assets/images/blog.png";
import colorGame from "../../assets/images/color-game.png";
import drum from "../../assets/images/drum-kit.png";
import lokdal from "../../assets/images/lokdal.png";
import secrets from "../../assets/images/secrets.png";
import seglko from "../../assets/images/seglko.png";
import simon from "../../assets/images/simon-game.png";
import symstech from "../../assets/images/symstech.png";
import tindog from "../../assets/images/tindog.png";
import unify from "../../assets/images/unify-markets.png";


const theme = createTheme({
    palette:{
        primary:{
            main:"#e2ca9a",
        },
        secondary:{
            main:"#554535",
        }
    },
    typography: {
        fontFamily:  "Baskervville, serif",
      },
    
} );

const projects = [
    {
        id:"secrets",
        name: "Project Secret Authentication",
        img: secrets,
        text:`Technologies used : Html, css, express, mongoose, passport, etc.`,
        text2:`scan qr to visit or click `,
        link: "https://secrets-go68.onrender.com/"
    },
    {
        id:"blog",
        name: "Project Blog Website with db",
        img: blog,
        text:`Technologies used : Html, css, express, mongoose, etc.`,
        text2:`scan qr to visit or click `,
        link: "https://blog-25a3.onrender.com/"
    },
    {
        id:"todo",
        name: "Project Full Stack Todo db",
        img: todoV2,
        text:`Technologies used : Html, css, express, mongoose, etc.`,
        text2:`scan qr to visit or click `,
        link: "https://todo-vsdb.onrender.com/"
    },
    {
        id:"drum-kit",
        name: "Project Drum Kit",
        img: drum,
        text:`Technologies used : Html, css, javascript`,
        text2:`scan qr to visit or click `,
        link: "https://anupsgh7714.github.io/drum-kit/"
    },
    {
        id:"color-game",
        name: "Project Color Game",
        img: colorGame,
        text:`Technologies used : Html, css, javascript, Bootstrap`,
        text2:`scan qr to visit or click `,
        link: "https://games.symstech.com/"
    },
    {
        id:"simon-game",
        name: "Project Simon Game",
        img: simon,
        text:`Technologies used : Html, css, javascript`,
        text2:`scan qr to visit or click `,
        link: "https://anupsgh7714.github.io/simon-game/"
    },
    {
        id:"tindog",
        name: "Project TinDog",
        img: tindog,
        text:`Technologies used : Html, css, javascript, Bootstrap`,
        text2:`scan qr to visit or click `,
        link: "https://anupsgh7714.github.io/tindog/"
    },
    {
        id:"symstech",
        name: "Project Company Website",
        img: symstech,
        text:`Technologies used : Html, css, javascript, Bootstrap`,
        text2:`scan qr to visit or click `,
        link: "https://symstech.com/"
    },
    {
        id:"seglko",
        name: "Project Company Website",
        img: seglko,
        text:`Technologies used : Html, css, javascript, Bootstrap, php`,
        text2:`scan qr to visit or click `,
        link: "https://www.seglko.org/"
    },
    {
        id:"lokdal",
        name: "Project lokdal",
        img: lokdal,
        text:`Technologies used : Html, css, javascript, Bootstrap, wordpress`,
        text2:`scan qr to visit or click `,
        link: "https://lokdal.in/Website/"
    },
        {
            id:"ables-charity",
            name: "Project Ables Charity",
            img: ables,
            text:`Technologies used : Html, css, javascript, Bootstrap, wordpress`,
            text2:`scan qr to visit or click `,
            link: "https://ablecharities.org/"
        },
        {
            id:"unify-markets",
            name: "Project Unify Markets",
            img: unify,
            text:`Technologies used : Html, css, express, javascript, Bootstrap, React`,
            text2:`scan qr to visit or click `,
            link: "http://app.unify-markets.com/"
        },
]

export {theme, projects};