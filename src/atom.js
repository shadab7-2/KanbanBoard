import { atom } from "recoil";

export const dataState = atom({
  key: "dataState",
  default: "",
});

export const infoState = atom({
    key: "infoState",
    default: [],
  });

  export const sumState = atom({
    key: "sumState",
    default: 0,
  });

  export const editIndexState = atom({
    key: "editIndexState",
    default: null,
  });