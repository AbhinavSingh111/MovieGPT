import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useEffect } from "react";
import {addUser, removeUser} from "../redux/userSlice";
import Error from "./Error";

const Body = ()=>{
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />

        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/error",
            element: <Error />
        },
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
            } else {
              // User is signed out
              dispatch(removeUser());
              
            }
          });
    },[]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;