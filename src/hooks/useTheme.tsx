import { makeVar } from "@apollo/client";
import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from "../utils/storage/localStorage";

const DARK_MODE = "DARK_MODE";

export const darkModeVar = makeVar(
  Boolean(getValueFromLocalStorage(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  setValueToLocalStorage(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  setValueToLocalStorage(DARK_MODE, "");
  darkModeVar(false);
};
