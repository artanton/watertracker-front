import React from 'react';
import { SignInStyle, ContainerSignin } from './LayoutSignIn.styled';

import bgSigninMob1x from '../../img/background/mobile/bottle_signin@1x.png';
import bgSigninMob2x from '../../img/background/mobile/bottle_signin@2x.png';
import bgSigninTab1x from '../../img/background/tablet/bottle_signin@1x.png';
import bgSigninTab2x from '../../img/background/tablet/bottle_signin@1x.png';
import bgSigninDes1x from '../../img/background/desktop/bottle_signin@1x.png';
import bgSigninDes2x from '../../img/background/desktop/bottle_signin@2x.png';

export const LayoutSignIn = ({ children }) => {
  return (
    <SignInStyle>
      <ContainerSignin>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${bgSigninDes1x} 1x, ${bgSigninDes2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 767px)"
            srcSet={`${bgSigninTab1x} 1x, ${bgSigninTab2x} 2x`}
            type="image/png"
            width="700"
            height="650"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${bgSigninMob1x} 1x, ${bgSigninMob2x} 2x`}
            type="image/png"
          />

          <img src={bgSigninDes1x} alt="bottle" />
        </picture>
        {children}
      </ContainerSignin>
    </SignInStyle>
  );
};
