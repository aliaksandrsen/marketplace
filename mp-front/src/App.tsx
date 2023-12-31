import { Suspense } from 'react';

import Header from 'features/Header';
import PublicRoutes from 'routes/PublicRoutes';
// import PrivateRoutes from 'routes/PrivateRoutes'
import { AppStyles, Footer } from 'App.styled';

export const App = () => {
  return (
    <>
      <AppStyles />

      <Header />

      <Suspense fallback={'Loading...'}>
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>

      <Footer>
        <div>© 2023. All rights reserved.</div>
      </Footer>
    </>
  );
};

export default App;
