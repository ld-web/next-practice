import { Reducer } from "react";

export type Status =
  | "init"
  | "running"
  | "success"
  | "error"
  | "failed"
  | "executed";

interface PracticeState {
  status: Status;
  output: string[];
  code: string;
}

export enum PracticeAction {
  RUN = "RUN",
  STATUS = "STATUS",
  OUTPUT = "OUTPUT",
  CODE = "CODE",
}

type PracticePayload = {
  [PracticeAction.RUN]: undefined;
  [PracticeAction.STATUS]: Status;
  [PracticeAction.OUTPUT]: string[];
  [PracticeAction.CODE]: string;
};

type ActionMap<Payload extends { [index: string]: any }> = {
  [Action in keyof Payload]: Payload[Action] extends undefined
    ? { type: Action }
    : { type: Action; payload: Payload[Action] };
};

export type PracticeActions =
  ActionMap<PracticePayload>[keyof ActionMap<PracticePayload>];

export const practiceReducer: Reducer<PracticeState, PracticeActions> = (
  state,
  action
) => {
  switch (action.type) {
    case PracticeAction.RUN:
      return {
        ...state,
        output: [],
        status: "running",
      };
    case PracticeAction.STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case PracticeAction.CODE:
      return {
        ...state,
        code: action.payload,
      };
    case PracticeAction.OUTPUT:
      const newOutput = [...state.output, ...action.payload];
      return {
        ...state,
        output: newOutput,
      };
    default:
      return {
        output: [],
        code: "",
        status: "init",
      };
  }
};
