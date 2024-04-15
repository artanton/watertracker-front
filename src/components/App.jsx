import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './index';

const WelcomePage = lazy(() => import('Pages/WelcomePage/WelcomePage'));
const Signin = lazy(() => import('Pages/SignIn/SignIn'));
const Signup = lazy(() => import('Pages/Signup/Signup'));
const Home = lazy(() => import('Pages/Home/Home'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
