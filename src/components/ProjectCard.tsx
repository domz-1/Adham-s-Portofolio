import { Card , CardMedia, CardContent , Typography, IconButton ,Chip , Box, ButtonGroup} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { GitHub } from "@mui/icons-material";

export interface IProjectCardProps {
    ImgSrc: string ,
    imgPosition: "right" | "left"
    Title: string,
    technologies:string[],
    Description: string,
    Link: string,
    GitHubRepo: string,
}

export default function ProjectCard (props: IProjectCardProps) {
return (

    <Card className="project-card" sx={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "0.3s",
        p:0,
        m:0,
        width: "70%",
        height: "fit-content",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        // gap: 20,
        minWidth:"250px",
        flexDirection: props.imgPosition === "right"? "row-reverse" : "row",
        marginBottom: 4,
        padding: 20,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
    }}>
        <CardMedia component="img" image={props.ImgSrc} 
        sx={{
            height: "auto",
            scale:.8,
            width: 350,
            p:0,
            m:0,
            objectFit: "cover",
            borderRadius: "5px" ,
            boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}/>
        <CardContent 
        className="project-card-content"
        sx={{
            flexGrow: 1,
            flexShrink:0,
            flexBasis: 1,
            display: "flex",

            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Typography variant="h2">{props.Title}</Typography>
            <br />
            <Typography>
                {props.Description}

                </Typography>
            <br />
            <Box>
                <Typography variant="h5">Technologies:</Typography>
                {props.technologies.map((tech, index) => <Chip key={index} label={tech} sx={{m:"5px"}}/>)}
            </Box>
            <br />
            <ButtonGroup >
            <IconButton href={props.Link} target="_blank" rel="noreferrer">
                <LinkIcon/>
            </IconButton>
            <IconButton href={props.GitHubRepo} target="_blank" rel="noreferrer">
                <GitHub/>
            </IconButton>
            </ButtonGroup>
        </CardContent>
        
    </Card>
);
}
