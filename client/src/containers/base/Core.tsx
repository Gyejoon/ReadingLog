import React from 'react';
import AuthModalContainer from 'containers/auth/AuthModalContainer';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import OpaqueLayer from 'components/common/OpaqueLayer';
import useUserLoader from './hooks/useUserLoader';

interface CoreProps {}

const Core: React.FC<CoreProps> = () => {

  useUserLoader();

  const { layer } = useSelector((state: RootState) => state.core);
  
  return (
    <>
      <OpaqueLayer visible={layer} />
      <AuthModalContainer />
      <ToastContainer
        transition={Flip}
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Core;
