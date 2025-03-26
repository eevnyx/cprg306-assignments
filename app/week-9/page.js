"use client";

import {useUserAuth} from "./_utils/auth-context";
import {useState} from "react";
import Link from "next/link";

export default function LandingPage(){
  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
  const [error, setError] = useState("");

  const handleSignIn = async () =>{
    try{
      await gitHubSignIn();
    } 
    catch (err){
      setError("Login failed");
      console.error(err);
    }
  };

  const handleSignOut = async () =>{
    try{
      await firebaseSignOut();
    } 
    catch (err){
      setError("Logout failed");
      console.error(err);
    }
  };

  return(
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Shopping List App</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {!user ?(
        <div>
          <p className="mb-4">Log in to continue</p>
          <button onClick={handleSignIn}
            className="px-6 py-2 bg-blue-500 rounded 
            hover:bg-blue-400">Sign in with GitHub</button>
        </div>
      ):(
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex gap-4">
            <Link href="/week-9/shopping-list"
              className="px-6 py-2 bg-green-500 rounded 
              hover:bg-green-400">Access Shopping List</Link>

            <button onClick={handleSignOut}
              className="px-6 py-2 bg-red-500 rounded 
              hover:bg-red-400">Logout</button>
          </div>
        </div>
      )}
    </main>
  );
}
