export let pendingCrafts = [];
export const addPendingCraft = (craft) => pendingCrafts.push(craft);
export const approveCraft = (id) => {
  const craftIndex = pendingCrafts.findIndex((craft) => craft.id === id);
  if (craftIndex !== -1) {
    products.push({ ...pendingCrafts[craftIndex], approved: true });
    pendingCrafts.splice(craftIndex, 1);
  }
};
