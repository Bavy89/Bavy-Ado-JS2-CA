import { load } from "../storage/index.mjs";

export function validateTokens() {
  if (!load("accessToken")) {
    window.location.href = "/index.html";
  }
}
