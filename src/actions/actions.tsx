import {IAction, IPayload} from "../lib/types";

export function search(input: string): IAction {
  return {
    type: "INPUT_SEARCH",
    payload: {
      input
    }
  };
}


