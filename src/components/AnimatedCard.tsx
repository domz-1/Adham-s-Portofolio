import React from 'react';
import { Card, CardProps } from "@mui/material";
import { motion, MotionProps, HTMLMotionProps, AnimationDefinition } from "framer-motion";

// Define a custom type for the motion component that combines Card and Motion props
type MotionCardProps = Omit<CardProps, keyof MotionProps> & 
  Omit<HTMLMotionProps<"div">, keyof CardProps> & {
    onAnimationStart?: ((definition: AnimationDefinition) => void) | undefined;
    children?: React.ReactNode;
  };

// Create the motion component
const MotionCard = motion(Card) as React.ComponentType<MotionCardProps>;

// Separate animation props from card props to avoid conflicts
interface AnimatedCardProps {
  children: React.ReactNode;
  animationProps?: Partial<HTMLMotionProps<"div">>;
  cardProps?: Omit<CardProps, keyof MotionProps>;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  animationProps = {},
  cardProps = {},
  className,
}) => {
  return (
    <MotionCard
      className={`project-card ${className || ''}`}
      {...(animationProps as Partial<HTMLMotionProps<"div">>)}
      {...(cardProps as Omit<CardProps, keyof MotionProps>)}
    >
      {children}
    </MotionCard>
  );
};

export default AnimatedCard;