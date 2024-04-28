import { PracticeAction, practiceReducer, PracticeState } from "./state";

const initialState: PracticeState = {
  status: "init",
  output: ["test"],
  code: "",
};

describe("Practice reducer", () => {
  test("run", () => {
    const next = practiceReducer(initialState, { type: PracticeAction.RUN });
    expect(next.status).toBe("running");
    expect(next.output).toHaveLength(0);
  });

  test("status", () => {
    const next = practiceReducer(initialState, {
      type: PracticeAction.STATUS,
      payload: "executed",
    });
    expect(next.status).toBe("executed");
  });

  test("code", () => {
    const next = practiceReducer(initialState, {
      type: PracticeAction.CODE,
      payload: "some code",
    });
    expect(next.code).toBe("some code");
  });

  test("output", () => {
    const next = practiceReducer(initialState, {
      type: PracticeAction.OUTPUT,
      payload: ["some output"],
    });
    expect(next.output).toHaveLength(2);
  });
});
