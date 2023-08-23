import Button,  { buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import React from 'react';

type Props = {
    disabled?: boolean
}
export const HeadlessButton: React.FC<Props> = ({disabled}) => {
  return (
    <CustomButton disabled={disabled}>Headless </CustomButton>
  )
}

const CustomButton = styled(Button)(
    ({theme}) => `
        background-color: red;
        color: white;

        border-radius: 2px;
        padding: 0.5rem 0.75rem;
        outline: none;
        border: 0;

        &:hover {
            background-color: blue;
        }

        &.${buttonClasses.active} {
            
          }
        
          &.${buttonClasses.focusVisible} {
            
            outline: 1px solid #303030;
            outline-offset: 4px
          }

        &.${buttonClasses.disabled} {
            opacity: 0.5;
            cursor: not-allowed;
          }
    `
)