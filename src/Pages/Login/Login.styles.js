import styled from 'styled-components';

import { colors } from '../../Themes/colors';
import InstagramText from '../../Assets/Images/instagram-logo.png';

export const Container = styled.div`
  width: 910px;
`;

export const Card = styled.div`
  width: 350px;
  height: 360px;
  border: 1px solid ${colors.ui.border};
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InstagramLogo = styled.img.attrs({
  src: InstagramText,
})`
  height: 50px;
  width: 175px;
`;
