"use client";
import { refetchCreditsAtom } from "@/atoms/flagAtom";
import { profileAtom } from "@/atoms/profileAtom";
import { addCredits, getProfile } from "@/lib/functions";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Script from "next/script";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export default withPageAuthRequired(function Page() {
  const { user } = useUser();
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [refetchCredits, setRefetchCredits] =
    useRecoilState(refetchCreditsAtom);
  React.useEffect(() => {
    async function fetchProfile() {
      const profile = await getProfile();
      setProfile(profile);
      setRefetchCredits((prev) => !prev);
    }
    if (user) fetchProfile();
  }, [setProfile, user, setRefetchCredits]);
  function handleAddCredits() {
    async function handler() {
      await addCredits();
      setRefetchCredits((prev) => !prev);
    }
    handler();
  }
  return (
    <section className="w-full flex flex-col items-center bg-indigo-800 min-h-screen">
      <section className="w-[95%] max-w-4xl flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-center mt-4 text-indigo-200">
          Profile
        </h1>
        <h2 className="text-2xl font-bold text-center text-white">
          You have {profile.credits} credits.
        </h2>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md font-bold text-xl hover:bg-orange-300 hover:text-indigo-600"
          onClick={handleAddCredits}
        >
          Buy more credits
        </button>
      </section>
    </section>
  );
});
