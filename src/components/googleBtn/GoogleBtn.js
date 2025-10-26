// import { useDispatch } from 'react-redux';

// import { useEffect } from "react";
// import { apiOauth } from "../../redux/authorization/authReducer";
import { ButtonContent, GoolgleButton } from "./GoogleBtnStyled";
// import { useDispatch } from "react-redux";

  
  export const GoogleBtn = () => {
    // const dispatch = useDispatch();

      const loginWithGoogle = event => {
        event.preventDefault();
        // window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
        window.location.href = `https://watertracker-backend-4r1j.onrender.com/api/auth/google`;
        
      };
      // useEffect(() => {
      //   const params = new URLSearchParams(window.location.search);
      //   const token = params.get('token');
      //   console.log( token);
      //   if (token)
      //     {
      //     dispatch(apiOauth(token));
         
      //   }
       
      // }, [dispatch]);
    return (
       <GoolgleButton onClick={loginWithGoogle}>
            <ButtonContent>
              <svg width="24" height="24" viewBox="0 0 32 32">
                <g>
                  <path
                    fill="#4285F4"
                    d="M31.68 16.364c0-1.13-.102-2.232-.293-3.273H16.32v6.195h8.64c-.372 2.01-1.49 3.715-3.18 4.86v4.04h5.14c3.01-2.77 4.75-6.85 4.75-11.822z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.32 32c4.32 0 7.95-1.43 10.6-3.89l-5.14-4.04c-1.43.96-3.26 1.53-5.46 1.53-4.2 0-7.75-2.84-9.02-6.66H2.01v4.18C4.65 28.36 10.06 32 16.32 32z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M7.3 18.94c-.32-.96-.5-1.98-.5-3.04s.18-2.08.5-3.04V8.68H2.01A15.98 15.98 0 0 0 0 16c0 2.62.63 5.1 1.74 7.32l5.56-4.38z"
                  />
                  <path
                    fill="#EA4335"
                    d="M16.32 6.36c2.35 0 4.45.81 6.11 2.4l4.58-4.58C24.27 1.43 20.64 0 16.32 0 10.06 0 4.65 3.64 2.01 8.68l5.29 4.18c1.27-3.82 4.82-6.66 9.02-6.66z"
                  />
                </g>
              </svg>
              Continue with Google
            </ButtonContent>
          </GoolgleButton> 

    )
  };
  