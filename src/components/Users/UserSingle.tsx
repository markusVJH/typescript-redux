import { useEffect } from "react";
import { getUserAlbums, getUsers } from "../../features/usersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams } from "react-router-dom";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const UserSingle = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);
  const userAlbums = useAppSelector((state) => state.users.usersAlbums);
  const {userId} = useParams();


  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
    
    dispatch(getUserAlbums(Number(userId)));
  }, [dispatch, users, userId]);


// 1. We should return a table of the users album data here
//remember that the user table has 3 fields: id, title, and userId
//we are only interested in the id and title of each album

return (
  <div>
    <Typography variant="h4">User Albums</Typography>
    <TableContainer>
      <Table>
        <TableHead>
            <TableCell>Album ID</TableCell>
            <TableCell>Title</TableCell>
        </TableHead>
        <TableBody>
          {userAlbums.map((album) => (
            <TableRow key={album.id}>
              <TableCell>{album.id}</TableCell>
              <TableCell>{album.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);
};

export default UserSingle;