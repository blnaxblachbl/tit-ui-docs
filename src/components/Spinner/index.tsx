import styled from "styled-components";

import { SpinnerProps, SpinnerComponentProps } from "./types";

export * from "./types";

export const Spinner = ({ size = 25, color = "#000", className }: SpinnerProps) => (
  <StyledSpinner size={`${size}px`} viewBox="0 0 50 50" color={color} className={className}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg<SpinnerComponentProps>`
  animation: rotate 2s linear infinite;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: block;
  margin: 24px auto;

  & .path {
    stroke: ${(props) => props.color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
