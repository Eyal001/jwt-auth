import { useAuth } from "../auth/useAuth";

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p>You are not logged in</p>;
  }
  return (
    <div>
      <h4>Welcome, {user?.email}</h4>
    </div>
  );
};
export default UserProfile;
