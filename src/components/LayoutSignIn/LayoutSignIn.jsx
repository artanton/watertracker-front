import React from 'react';
import { SignInStyle, ContainerSignin } from './LayoutSignIn.styled';

import bgSigninMob1x from '../../img/background/mobile/bottle_signin@1x.png';
import bgSigninMob2x from '../../img/background/mobile/bottle_signin@2x.png';
import bgSigninTab1x from '../../img/background/tablet/bottle_signin@1x.png';
import bgSigninTab2x from '../../img/background/tablet/bottle_signin@1x.png';

export const LayoutSignIn = ({ children }) => {
  return (
    <SignInStyle>
      <ContainerSignin>
        {children}
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${bgSigninTab1x} 1x, ${bgSigninTab2x} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 768px)"
            srcSet={`${bgSigninMob1x} 1x, ${bgSigninMob2x} 2x`}
            type="image/png"
          />
          <img src={bgSigninTab1x} alt="bottle" />
        </picture>
      </ContainerSignin>
    </SignInStyle>
  );
};
