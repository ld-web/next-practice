import { Reducer } from "react";

export type State =
  | "init"
  | "running"
  | "verifying"
  | "success"
  | "error"
  | "failed"
  | "executed";

export type Action =
  | "run"
  | "fail"
  | "error"
  | "verify"
  | "succeed"
  | "finished";

export const practiceStateReducer: Reducer<State, Action> = (state, action) => {
  switch (action) {
    case "run":
      return "running";
    case "verify":
      return "verifying";
    case "fail":
      return "failed";
    case "error":
      return "error";
    case "succeed":
      return "success";
    case "finished":
      return "executed";
    default:
      return "init";
  }
};
