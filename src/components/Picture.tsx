import { Box } from '@mui/material';

export interface IPictureProps {
    src : string,
    alt? : string,
    direction?: "right" | "left",
}

export default function Picture (props: IPictureProps) {

return (
    <Box className='pic-container'>
        <img src={props.src} alt={props.alt} style={{
        }}/>
    </Box>
);
}
