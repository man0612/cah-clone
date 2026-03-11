import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",

  admin: {
    useAsTitle: "title",
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
        name: "slug",
        type: "text",
        required: true,
        unique: true,
      },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};