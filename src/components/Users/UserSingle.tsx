import { useEffect } from "react";
import { getUsers } from "../../features/usersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const UserSingle = () => {

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);

  useEffect(() => {
    if (users.length === 0) dispatch(getUsers());
  }, [dispatch, users]);

  return (
    <div>
      User single will be here
    </div>
  );
};

export default UserSingle;