import styled, {css} from 'styled-components';

const widthLength = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const SpanContainer = styled.span`
  ${widthLength}
`;

export const QuatitySpan = styled.span`
  ${widthLength}
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const ValueContainer = styled.div`
  margin: 0 10px;
`;

export const RemoveContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
