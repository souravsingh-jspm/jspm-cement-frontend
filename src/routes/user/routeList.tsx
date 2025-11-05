import {
  HomePage,
  ImportantDate,
  KeynoteSpeaker,
  ConfereanceTheme,
  ConferanceCommitte,
  Registration,
  SubmitPaper,
  Publications,
} from "./lazyLoaded";
import { FRONTEND_ROUTES } from "@/constants/routeConstants";

export const landingRoutes = [
  {
    path: FRONTEND_ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: FRONTEND_ROUTES.KEYNOTE_SPEAKERS,
    element: <KeynoteSpeaker />,
  },
  {
    path: FRONTEND_ROUTES.CONFERENCE_COMMITTEE,
    element: <ConferanceCommitte />,
  },
  {
    path: FRONTEND_ROUTES.CONFERENCE_THEME,
    element: <ConfereanceTheme />,
  },
  {
    path: FRONTEND_ROUTES.IMPORTANT_DATES,
    element: <ImportantDate />,
  },
  {
    path: FRONTEND_ROUTES.REGISTRATION,
    element: <Registration />,
  },
  {
    path: FRONTEND_ROUTES.PUBLICATIONS,
    element: <Publications />,
  },
  {
    path: FRONTEND_ROUTES.SUBMIT_PAPER,
    element: <SubmitPaper />,
  },
];
