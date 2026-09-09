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
    };
  }

  if (type === "doubleSlide") {
    return {
      id: Date.now(),
      type: "doubleSlide",

      corniceWidth: 0,

      handleQuantity: 0,

      addPortal: false,
    };
  }
  if (type === "portal") {
    return {
      id: Date.now(),
      type: "portal",

      depth: 0,

      trimSides: 2,
    };
  }
  if (type === "entrance") {
    return {
      id: Date.now(),
      type: "entrance",

      depth: 0,

      addTrim: true,
    };
  }
  if (type === "additional") {
    return {
      id: Date.now(),
      type: "additional",
    };
  }

  return null;
}
