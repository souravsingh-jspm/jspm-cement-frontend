import { lazy } from "react";

export const KeynoteSpeaker = lazy(
  () => import("@/pages/key-note-speaker/KeyNoteSpeaker")
);

export const SignIn = lazy(() => import("@/pages/Admin/SignIn"));
