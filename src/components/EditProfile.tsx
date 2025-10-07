import React from 'react';
import EditStudentProfile from './EditStudentProfile';
import EditSchoolProfile from './EditSchoolProfile';
import EditLandlordProfile from './EditLandlordProfile';

interface EditProfileProps {
  onBack: () => void;
  userData: {
    name: string;
    email: string;
    userType: 'student' | 'school' | 'senhorio';
  };
}

const EditProfile = ({ onBack, userData }: EditProfileProps) => {
  switch (userData.userType) {
    case 'student':
      return <EditStudentProfile onBack={onBack} userData={userData} />;
    case 'school':
      return <EditSchoolProfile onBack={onBack} userData={userData} />;
    case 'senhorio':
      return <EditLandlordProfile onBack={onBack} userData={userData} />;
    default:
      return null;
  }
};

export default EditProfile;
