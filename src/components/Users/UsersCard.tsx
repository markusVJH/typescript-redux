import { Link } from "react-router-dom";
import { User } from "../../features/usersSlice";
import { Card, CardContent, Typography } from "@mui/material";

interface UserCardProps {
  user: User;
}

const UsersCard = ({ user }: UserCardProps) => {
  console.log("user", user )

  return (
    <Link to={`/users/${user.id}`} style={{ textDecoration: "none"}}>
      <Card sx={{ maxWidth: 345, margin: "1rem" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }} >
              {user.username} - {user.email}
            </Typography>
          </CardContent>
      </Card>
    </Link>
  )
}

export default UsersCard;