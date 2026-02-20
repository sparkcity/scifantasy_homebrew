import { loadEdits } from "./edits.mjs";

Hooks.on("init", () => {

  let isActiveCustomDND5E = game.modules.get("custom-dnd5e")?.active;

  if (!isActiveCustomDND5E) {
    console.log("custom-dnd5e module is INACTIVE. Loading homebrew edits.")
    loadEdits();
  }
  else{
    console.log("custom-dnd5e module is ACTIVE.")
  }

});

