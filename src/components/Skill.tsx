import { Typography } from '@mui/material';

export interface ISkillProps {
  name: string;
  src:string;
}

export default function Skill (props: ISkillProps) {
  return (
    <div className="skill">
      <img src={props.src} alt={props.name} />
      <Typography>{props.name}</Typography>
    </div>
  );
}
