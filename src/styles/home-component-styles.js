import styled from 'styled-components';
import {Colors, SIZECONSTANTS} from '../misc/utils';



export const BaseContainer = styled.View`
   flex:1;
   background-color:${Colors.baseThemeBgColor};
`

export const AppBarContainer = styled.View`
  padding: 16px;
  flex-direction:row;
  justify-content: space-between;
`;

export  const ActionButtonContainer = styled.View`
  flex-direction:row;
`;

export  const BodyContainer = styled.View`
    padding:16px;
`;

export const HomeCardButtonContainer = styled.View `
  flex:1;
  height: ${SIZECONSTANTS.homeCardButton};
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  align-content:center;
`

export const BaseDriverCardScoringContainer = styled.View`
  height: ${SIZECONSTANTS.homeCardButton};
   align-items:center;
  flex-direction:row;

    `
