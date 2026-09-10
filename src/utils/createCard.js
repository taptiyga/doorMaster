export function createCard(type) {
  if (type === "door") {
    return {
      id: Date.now(),
      type: "door",
      hingeType: "mortise",
      hingeQuantity: 2,
      lockType: "bathroom",
      openingDepth: 70,
      trimSides: 2,
      trimSawLength: 0,
    };
  }

  if (type === "swing") {
    return {
      id: Date.now(),
      type: "swing",
      hingeType: "mortise",
      hingeQuantity: 4,
      lockType: "bathroom",
      openingDepth: 70,
      trimSides: 2,
      trimSawLength: 0,
      bolt: 1,
      strikePlate: 1,
      falseHandle: false,
    };
  }
  if (type === "slide") {
    return {
      id: Date.now(),
      type: "slide",
      corniceWidth: 0,
      handleQuantity: 0,
      addPortal: false,

      openingDepth: 50,
      trimSides: 2,
      trimSawLength: 0,
    };
  }

  if (type === "doubleSlide") {
    return {
      id: Date.now(),
      type: "doubleSlide",
      corniceWidth: 0,
      handleQuantity: 0,
      addPortal: false,

      openingDepth: 50,
      trimSides: 2,
      trimSawLength: 0,
    };
  }
  if (type === "portal") {
    return {
      id: Date.now(),
      type: "portal",
      openingDepth: 0,
      trimSides: 2,
      trimSawLength: 0,
    };
  }
  if (type === "entrance") {
    return {
      id: Date.now(),
      type: "entrance",
      openingDepth: 0,
      addTrim: 0,
      trimSawLength: 0,
    };
  }
if (type === "additional") {
  return {
    id: Date.now(),
    type: "additional",
    dismantlingQuantity: 0,
    skirtingQuantity: 0,
    narrowingQuantity: 0,
  };
}

  return null;
}
