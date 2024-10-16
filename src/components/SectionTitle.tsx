import { Chip , Stack , Typography } from '@mui/material';

export interface ISectionTitleProps {
  title: string;
  body: string;
}

export default function SectionTitle (props: ISectionTitleProps) {
  return (
    <Stack className='title'
    bgcolor='transparent'>
      <Chip label={props.title} className='chip'/>
      <Typography>{props.body}</Typography>
    </Stack>
  );
}
