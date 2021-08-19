"use strict";

const ProductHook = (exports = module.exports = {});

ProductHook.beforeSave = async (modelInstance) => {
  modelInstance.slug = modelInstance.slug.replace(/ /g, "-");
};
