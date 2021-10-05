import * as ProgressPrimitive from '@radix-ui/react-progress';
import styled from 'styled-components';

const StyledProgress = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  margin-top: 0.25rem;
  background: grey;
  border-radius: 99999px;
  width: 100%;
  height: 25px;
`;
const StyledIndicator = styled(ProgressPrimitive.Indicator)`
  background-color: white;
  height: 100%;
  transition: width 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;

export const Loading = styled.span`
  margin-top: 2rem;
`;

export const Progress = StyledProgress;
export const Indicator = StyledIndicator;
