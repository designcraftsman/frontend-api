import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/style.css';


import Y from './assets/Y.png'
import engine from './assets/assets-images/engine.png'
import motherboard from './assets/assets-images/motherboard.png'
import arduinoCourse from './assets/course-preview/arduino.png'
import engineCourse from './assets/course-preview/motor.png'
import groupProfile from './assets/group-profiles/group.png'

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

// Import your page components
import Dashboard from './pages/Dashboard.jsx';
import Courses from './pages/Courses.jsx';
import Groups from './pages/Groups.jsx';
import Students from './pages/Students.jsx';
import Assets from './pages/Assets.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import GroupChat from './pages/GroupChat.jsx';
import Notifications from './pages/Notifications.jsx';
import MakeCourse from './pages/MakeCourse.jsx';
import Help from "./pages/Help.jsx"



// this is just for testing
const settings1 ={
  id: 1,
  userType: "student",
  userId: 3500,
  twoFactorAuth: true,
  emailNotification: true,  // true for on , false for off
  language : "eng" , // eng ,fr 
  theme : "dark" , // dark , light
  recoveryEmailSett :false, // true for on , false for off
  recoveryEmail :"yomo@gmail.com", // recovery email if recoveryEmailSett is On
};
const notification1 = {
  id: 102,
  type: "success", // types are : sucess , warning , danger , dismissible
  message: "Your account has been created succesfully , Happy learning",
  time: "11:00 pm",
  date: "22/01/2024",
};
const notification2 = {
  id: 102,
  type: "danger", // types are : sucess , warning , danger , dismissible
  message: "You have not sat a recovery email yet , go to settings to set one",
  time: "11:30 pm",
  date: "22/01/2024",
};
const notifications3 = {
  id: 102,
  type: "dismissible", // types are : sucess , warning , danger , dismissible
  message: "You have new messages from the 3IIR group",
  time: "10:00 am",
  date: "30/01/2024",
};

const student = {
  id: 10253,
  firstname: "youssef",
  lastname: "moustaiid",
  email: "testingemail@gmail.com",
  password: "aaaaaaaaaa",
  gender: "m",
  birthdate: "22/01/2004",
  profile: Y ,
  notifications : [notification1 , notification2,notifications3]
};
const student2 = {
  id: 10253,
  firstname: "Amine",
  lastname: "elbalawi",
  email: "testingemail@gmail.com",
  password: "aaaaaaaaaa",
  gender: "m",
  birthdate: "22/01/2004",
  profile: Y 
};
const teacher1 = {
  id: 301,
  profile: Y, // Assuming Y is a placeholder profile image
  firstname: "John",
  lastname: "Doe",
  email: "johndoe@example.com",
  password: "teacherpassword",
  gender: "m",
  speciality: "Robotics",
};
const asset1 = {
  id: 1,
  name: "Engine",
  description: "High-performance engine",
  url : "",
  type: "hardware",
  format: "image",
  preview: engine,
};
const asset2 = {
  id: 2,
  name: "Motherboard",
  description: "Advanced motherboard",
  url : "",
  type: "hardware",
  format: "image",
  preview: motherboard,
};
const course1 = {
  id: 101,
  name: "Arduino Basics",
  type: "public",
  description:"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ..",
  teacher: "John Doe",
  previewImg: arduinoCourse,
  bookmark :false
};
const course2 = {
  id: 102,
  description :"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ...",
  name: "Engine Mechanics",
  type: "private",
  teacher: "Jane Smith",
  previewImg: engineCourse,
  bookmark :false
};
const course3 = {
  id: 103,
  description :"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ...",
  name: "Engine Mechanics",
  type: "private",
  teacher: "Jane Smith",
  previewImg: engineCourse,
  bookmark :true

};
const course4 = {
  id: 104,
  description :"This is a course to teach Basic functionnality of Mechanical engines in general , we will go over the basics , some componewnts ...",
  name: "Engine Mechanics",
  type: "private",
  teacher: "Jane Smith",
  previewImg: engineCourse,
  bookmark :true

};
const group1 = {
  id: 201,
  name: "Robotics Club",
  members: [student, student2],
  chat: [
    { message: "Guys, When will the exam take place?", time: "11:31 pm", username: "Alice", userProfile: student.profilePicture, isCurrentUser: false },
    { message: "The exam is scheduled for next Tuesday.", time: "11:33 pm", username: "Bob", userProfile: student2.profilePicture, isCurrentUser: true },
    { message: "Can someone share the study materials?", time: "11:35 pm", username: "Alice", userProfile: student.profilePicture, isCurrentUser: false },
    { message: "Sure, I'll upload them to the group folder.", time: "11:37 pm", username: "Bob", userProfile: student2.profilePicture, isCurrentUser: true }
  ],
  adminId: 1,
  profile: groupProfile || defaultGroupProfile
};
const group2 = {
  id: 202,
  name: "Engineering Society",
  members: [student],
  chat: [{ message: "Reminder: Meeting at 5 pm", time: "4:31 pm" }],
  adminId: 2,
  profile: groupProfile
};
const assignement1 ={
  id: 1023,
  name: "Combustion engine",
  type: "Mecanics",
  percentage: 88,
  passed: true
};
const assignement2 ={
  id: 1023,
  name: "MotherBoard structure",
  type: "Tech",
  percentage: 91,
  passed: true
};

const AppWrapper = (props) => {
  const location = useLocation();
  return <App currentLink={location.pathname} {...props} user={student2} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      {
        path: '',
        element: <Dashboard enrolledCourses={[course1 , course2]} bookmarksCourses={[course3, course4]} recommendedCourses={[course1 , course2]}  assignments={[assignement1 , assignement2]}  user={student2}/>,
      },
      {
        path: 'dashboard',
        element: <Dashboard enrolledCourses={[course1 , course2]} bookmarksCourses={[course3, course4]} recommendedCourses={[course1 , course2]}  assignments={[assignement1 , assignement2]} user={student2}/>,
      },
      {
        path: 'courses',
        element: <Courses courses={[course1 ,course2 , course1 , course2]} user={student2} />,
      },
      {
        path: 'groups',
        element: <Groups groups={[group1 , group2]} user={student2} />,
      },
      {
        path: 'group-chat',
        element: <GroupChat group={group1} user={student2} />,
      },
      {
        path: 'students',
        element: <Students students={[student , student2 , student , student2]} user={student2} />,
      },
      {
        path: 'assets',
        element: <Assets assets={[asset1 , asset2 , asset1 , asset2]} user={student2} />,
      },
      {
        path: 'profile',
        element: <Profile user={student} />,
      },
      {
        path: 'settings',
        element: <Settings settings={settings1} user={student2} />,
      },
      {
        path: 'notifications',
        element: <Notifications notifications={[notification1, notification2 , notifications3]} user={student2}/>,
      },
      {
        path: 'make-course',
        element: <MakeCourse user={student2}/>,
      },
      {
        path: 'sign-up',
        element: <SignUp user={student2}/>,
      },
      {
        path: 'sign-in',
        element: <SignIn user={student2}/>,
      },
      {
        path: 'help',
        element: <Help />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
