import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <Wrapper displayedValue={displayedValue}>
        <NativeSelectWrapper value={value} onChange={onChange}>
          {children}
        </NativeSelectWrapper>
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

const NativeSelectWrapper = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  color: ${COLORS.gray700};
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.gray700};
`;

const Wrapper = styled.div`
  width: ${({ displayedValue }) => displayedValue.length * 8 + 64}px;
  border-radius: 8px;
  padding: 12px 32px 12px 16px;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: ${COLORS.transparentGray15};
  position: relative;

  &:hover select,
  &:hover div {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default Select;
