const { ProductTag } = require('../models');

const productTagData = [
  {
    product_ID: 1,
    tag_id: 6,
  },
  {
    product_ID: 1,
    tag_id: 7,
  },
  {
    product_ID: 1,
    tag_id: 8,
  },
  {
    product_ID: 2,
    tag_id: 6,
  },
  {
    product_ID: 3,
    tag_id: 1,
  },
  {
    product_ID: 3,
    tag_id: 3,
  },
  {
    product_ID: 3,
    tag_id: 4,
  },
  {
    product_ID: 3,
    tag_id: 5,
  },
  {
    product_ID: 4,
    tag_id: 1,
  },
  {
    product_ID: 4,
    tag_id: 2,
  },
  {
    product_ID: 4,
    tag_id: 8,
  },
  {
    product_ID: 5,
    tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
