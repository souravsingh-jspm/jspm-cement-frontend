import { lazy } from "react";

export const HomePage = lazy(() => import("@/pages/home-page/HomePage"));

export const ImportantDate = lazy(
  () => import("@/pages/important-date/ImportantDate")
);

export const KeynoteSpeaker = lazy(
  () => import("@/pages/key-note-speaker/KeyNoteSpeaker")
);

export const Publications = lazy(
  () => import("@/pages/publications/Publications")
);
export const ConfereanceTheme = lazy(
  () => import("@/pages/conference-theme/ConferenceTheme")
);

export const ConferanceCommitte = lazy(
  () => import("@/pages/conference-committee/ConferenceCommitte")
);

export const Registration = lazy(
  () => import("@/pages/registration/Registration")
);
export const SubmitPaper = lazy(
  () => import("@/pages/submit-paper/SubmitPaper")
);
