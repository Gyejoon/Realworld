import React from 'react';
import { RouteComponentProps, Route } from 'react-router';
import Profile from '../components/common/Profile';

interface ProfilePageProps
  extends RouteComponentProps<{
    username: string;
  }> {}

const ProfilePage: React.FC<ProfilePageProps> = ({ match }) => {
  const { username } = match.params;

  return <Profile />;
};

export default ProfilePage;
