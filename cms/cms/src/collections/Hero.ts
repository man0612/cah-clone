import { CollectionConfig } from "payload";

export const Hero: CollectionConfig = {
  slug: "hero",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
    },
  ],
};