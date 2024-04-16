import { Link, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">LOGO HERE</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/home">Home</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
