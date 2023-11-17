import React from "react";
import Grid from "@mui/material/Grid";   
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Card, CardMedia, Container, Divider, ThemeProvider, Typography,  } from "@mui/material";
import { theme } from "./components/theme";
import electrical from "../assets/images/electrical.png";
import a from "../assets/images/a.jpg";
import resume from "../assets/images/resume.png";
import { projects } from "./components/theme";

const Resume = () => {
    const clr = "#554535";

    return(
        <>  
            <ThemeProvider theme={theme}>
            <Container 
                maxWidth="md"
                sx={{
                    
                }}

            >   
                <Box
                    sx={{
                        bgcolor:"#e6d3a9",   
                        minHeight:"100vh",
                        boxShadow: "3px 3px 10px rgb(0 0 0 / 0.2)",
                        color:"#554535",
                        // background:URL("C:\Users\LENOVO\Downloads\Untitled design.jpg"),    
                        // backgroundImage:"C:\Users\LENOVO\Downloads\Untitled design.jpg"
                    }}
                    p={4}
                    m={{xs:0 ,md:4}}
                >
                    <Divider 
                        sx={{bgcolor:"#554535"}}
                    />
                    <Grid container py={1} textAlign="center">
                        <Grid item xs={2}>
                            <Typography fontSize={{xs:5, md:10}} fontWeight={700} textAlign={"justify"}>Largest Delhi <br/> Circulation <br/> in New Delhi</Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <Typography variant="h3" component="h1"
                                sx={{
                                    fontSize:{xs:15, sm:50},
                                    // lineHeightStep:10
                                    wordSpacing:{xs:3, md:5},
                                    letterSpacing:{xs:7 ,md:10},
                                }}
                                fontWeight={900}
                            >The Resume</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography fontSize={{xs:5, md:10}} fontWeight={700}    textAlign={"right"}>Lorem Ipsum <br/> Life History, <br/>Page 13 and 14 <br/>Only There</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{bgcolor:"#554535"}}/>


                    <Grid container py={1} >
                        <Grid item xs={3}>
                            <Typography variant="h4" component="h4" fontWeight={700} fontSize={{xs:8 ,md:12}} >VOL 01 - NO.01</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="h4" component="h4"
                                sx={{
                                    fontSize:{xs:8, md:12},
                                    textAlign:"center",
                                    fontWeight:700
                                }}
                            >Faridabad: day, Date: 10/10/2023, pages: 1542</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h4" component="h4" fontWeight={700} textAlign={"right"} fontSize={{xs:8 ,md:12}}>Price Rs.10</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{bgcolor:"#554535"}}/>

                    <Grid container spacing={2} pt={3}>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography 
                                        variant="h3" 
                                        component={"h2"}
                                        textAlign={"justify"}
                                        fontSize={{xs:22,md:50}}
                                        fontWeight={{md:300}}
                                        wordSpacing={10}
                                    >
                                        Editorial News
                                    </Typography>
                                    <Box
                                        // sx={{
                                        //     display:"float"
                                        // }}
                                    >
                                        <CardMedia component={"img"} height="200" image={a} sx={{
                                            objectFit:"fill"
                                        }} alt="image"/>
                                        <Box>
                                        <Typography 
                                            variant="h4" 
                                            component={"h4"}
                                            fontSize={{xs:13 ,md:20}}
                                        >
                                            Full Stack Web Developer
                                        </Typography>
                                        <Typography textAlign={"justify"} fontSize={{xs:8, md:15}}>
                                            Hey, There is a full stack web developer named <strong>Anoop Singh</strong>  having experience of at least 2 years. He has done
                                            several projects. He has worked in 2 different companies. But has a 1 year career gap. And now 
                                            he is come back with great energy and enthusiasts. He is willing to learn and create new astonishing and creating things.
                                            {/* Has skills in HTML, css, javascript, react js. */}
                                        </Typography>
                                        </Box>
                                        
                                    
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider component={"nav"} sx={{
                                        border:2,
                                        my:2
                                    }}/>    
                            <Box>
                            <Typography 
                                            fontSize={{xs:12, md:20}}
                                            textAlign={"center"}
                                            fontWeight={700}
                                        >
                                        Work Experience 2
                                </Typography>
                                <Typography 
                                    textAlign={"justify"} 
                                    fontSize={{xs:8, md:15}}
                                >
                                    He join his second company named Saroj Education group situated in Lajpat
                                    Nagar, New Delhi. He worked here from November 2021 to May 2022 as a Junior
                                    web developer. He worked several projects there. 2 of them are :
                                    1. <a href="https://www.seglko.org/">https://www.seglko.org/</a> 
                                    2. <a href="https://lokdal.in/Website/">https://lokdal.in/Website/</a> 
                                    
                                </Typography>   
                            </Box>
                            <Divider component={"nav"} sx={{
                                        border:2,
                                        my:2
                                    }}/> 
                            <Box>
                            <Typography 
                                            fontSize={{xs:12, md:20}}
                                            textAlign={"center"}
                                            fontWeight={700}
                                            mb={1}
                                        >
                                        Project Electrical
                                </Typography>
                                <Typography 
                                    textAlign={"justify"} 
                                    fontSize={{xs:8, md:15}}
                                >
                                    <CardMedia component={"img"} sx={{
                                        objectFit:"contain",
                                        
                                    }}  image={electrical} />
                                    work in under progress <br />
                                    scan qr to check the project or use below link :
                                    <a href="https://anupsgh7714.github.io/bhatia-frontend/">https://anupsgh7714.github.io/bhatia-frontend/</a>
                                </Typography>   
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container mt={1}>
                                <Grid item xs={12}>
                                    <Box>
                                    <Typography 
                                        fontSize={{xs:12, md:30}}
                                        textAlign={"center"}
                                        pt={0.5}
                                    >
                                        QR code
                                    </Typography>
                                    <CardMedia component={"img"} height={100} sx={{
                                        objectFit:"contain"
                                    }} width={"20rem"} image={resume} alt="qr-code"/>
                                    <Typography textAlign={"justify"} fontSize={{xs:8, md:15}}>Scan Qr code to go online or <a href="https://anupsgh7714.github.io/resume/">
                                    click</a></Typography>
                                    </Box>
                                    <Divider component={"nav"} sx={{
                                        border:2,
                                        mt:2
                                    }}/>
                                    <Box py={1}>
                                        <Typography 
                                            variant="h3" 
                                            component={"h2"}
                                            // textAlign={"justify"}
                                            fontSize={{xs:12, md:30}}
                                            textAlign={"center"}
                                            wordSpacing={10}
                                        >
                                            Education
                                        </Typography>
                                        <Typography textAlign={"justify"} fontSize={{xs:8, md:15}}>
                                            He has done his graduation from Ymca, Haryana in B.Voc(W.D) in year 2018-2021 with 
                                            above 9 cgpa. And passed out 12th with 80% from A.D. sr. sec school in 2018.
                                            And 10th in 2016 from same school with 8.4 cgpa.
                                        </Typography>
                                    </Box>
                                    <Divider component={"nav"} sx={{
                                        border:2,
                                        my:2
                                    }}/>  
                            <Box>
                            <Typography 
                                            fontSize={{xs:12, md:20}}
                                            textAlign={"center"}
                                            fontWeight={700}
                                        >
                                        Work Experience 3
                                </Typography>
                                <Typography 
                                    textAlign={"justify"} 
                                    fontSize={{xs:8, md:15}}
                                >
                                    He join his third which is his previous first company named  Symstech Technology Upgrade
                                    As  web developer. Company is located in Ballabgrah, Haryana. He worked here from April 2022 to October 2022.
                                    He learned about express, php, ml, etc.
                                    He worked on several projects there. 2 of them are :
                                    1. <a href="https://symstech.com/">https://symstech.com/</a> 
                                    2. <a href="https://ablecharities.org/">https://ablecharities.org/</a> 
                                    
                                </Typography>   
                            </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Box mt={1}>
                            <Typography 
                                        fontSize={{xs:12, md:30}}
                                        textAlign={"center"}
                                    >
                                       Skills
                                </Typography>
                                <Typography textAlign={"justify"} fontSize={{xs:8, md:15}}>He has skills in HTML, css, Bootstrap,
                                    javascript, reactjs, nodejs, expressjs, passportjs, npm, materialUi, python, django, djangorestframework,
                                    Wordpress, postman.
                                </Typography>
                            </Box>
                            <Divider component={"nav"} sx={{
                                        border:2,
                                        my:2
                                    }}/>
                            <Box >
                                <Typography 
                                            fontSize={{xs:12, md:20}}
                                            textAlign={"center"}
                                            fontWeight={700}
                                        >
                                        Work Experience 1
                                </Typography>
                                <Typography 
                                    textAlign={"justify"} 
                                    fontSize={{xs:8, md:15}}
                                >
                                    He started his career with company named Symstech Technology Upgrade
                                    As front end developer. Company is located in Ballabgrah, Haryana. He worked
                                    there from jan 2021 to June 2021. He harnished his skills in htm, css, javascript,
                                    bootstrap and worpress. But unfortunately he has no project links to show expect this :    
                                    <a href="https://symstech.com/">https://symstech.com/</a>    
                                </Typography>
                            </Box>
                            <Divider component={"nav"} sx={{
                                        border:2,
                                        my:2
                                    }}/>
                            <Box>
                                <Typography 
                                    fontSize={{xs:12, md:20}}
                                    textAlign={"center"}
                                    fontWeight={700}
                                >
                                    Contact
                                </Typography>
                                <Typography textAlign={"justify"} fontSize={{xs:8, md:15}}>
                                    His contact number is +91-8744881664.
                                    And Contact mail : anupsgh7714@gmail.com

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque, quisquam culpa ex.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider component={"nav"} sx={{
                                        border:2,
                                        my:2
                                    }}/> 
                    <Box>
                        <Grid container spacing={2}>
                        {projects.map(project => (
                            <Grid item xs={6} sm={4} key={project.id}>
                                {/* <Box> */}
                            <Typography 
                                            fontSize={{xs:12, md:20}}
                                            textAlign={"center"}
                                            fontWeight={700}
                                            mb={1}
                                        >
                                        {project.name}
                                </Typography>
                                <Typography 
                                    textAlign={"justify"} 
                                    fontSize={{xs:8, md:15}}
                                >
                                    <CardMedia component={"img"} sx={{
                                        objectFit:"contain",
                                        
                                    }}  image={project.img} />
                                        {project.text} <br />
                                    {project.text2}
                                    <a href={`${project.link}`}>{project.link}</a>
                                </Typography>   
                            {/* </Box> */}
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
            </ThemeProvider>
        </>
    )
}

export default Resume;