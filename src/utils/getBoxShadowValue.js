export default function getBoxShadowValue(shadows) {
  let finalString = "";

  shadows.forEach((shadow) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === "range") {
          finalString += ` ${input.value}px`;
        } else if (input.type === "color") {
          finalString += ` ${input.value}`;
        }
      });
      if (shadow.inset) {
        finalString += " inset";
      }
      // On ajoute tt les valeurs des shadows jusqu'a qu'il y en ait plus
      if (shadows.indexOf(shadow) === shadows.length - 1) {
        finalString += ";";
      } else {
        finalString += ",";
      }
    }
  });
  return finalString;
}
