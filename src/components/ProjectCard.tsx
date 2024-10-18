import React from 'react';
import { CardMedia, CardContent, Typography, IconButton, Chip, Box, ButtonGroup } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { GitHub } from "@mui/icons-material";
import { useSelector } from "react-redux";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import AnimatedCard from "./AnimatedCard";
import { MotionProps } from "framer-motion";

interface IProjectCardProps {
  ImgSrc: string;
  imgPosition: "right" | "left";
  Title: string;
  technologies: string[];
  Description: string;
  Link: string;
  GitHubRepo: string;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  ImgSrc,
  imgPosition,
  Title,
  technologies,
  Description,
  Link,
  GitHubRepo,
  children,
}) => {
  return (
    <AnimatedCard
      className="project-card"
      animationProps={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      }}
    >
      {/* Rest of the code remains the same */}
    </AnimatedCard>
  );
};

export default ProjectCard;