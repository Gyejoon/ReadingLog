import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser, GET_CURRENT_USER } from '../../../lib/graphql/user';
import { setUser } from '../../../modules/core';
import { useQuery } from '@apollo/react-hooks';
import { RootState } from '../../../modules';

const useUserLoader = () => {
  const dispatch = useDispatch();
  const getCurrentUser = useQuery<{ auth: CurrentUser }>(GET_CURRENT_USER);
  const prevUser = useSelector((state: RootState) => state.core.user);

  const user = getCurrentUser.data ? getCurrentUser.data.auth : undefined;

  if (user) {
    dispatch(setUser(user));
  }

  useEffect(() => {
    if (user === undefined) return () => {};
    if (prevUser !== user) {
      dispatch(setUser(user));
    }
    return undefined;
  }, [dispatch, prevUser, user]);

  useEffect(() => {
    if (user === undefined) return;
    if (user === null) return; // not logged in
  }, [user]);
};

export default useUserLoader;
