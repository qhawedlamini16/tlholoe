// Single source of truth for the service pages and every page's search
// title/description. Used by the pages and by the build-time prerender.

export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  title: string;
  description: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: "funeral-arrangements",
    name: "Funeral arrangements",
    short: "Calm guidance for the decisions and details that come next.",
    h1: "Funeral arrangements in Kagiso",
    title: "Funeral Arrangements in Kagiso & Krugersdorp | Tlholoes Funeral Parlour",
    description:
      "Dignified funeral arrangements from Tlholoes Funeral Parlour in Kagiso 2, serving families since 1957. Call 011 410 1081. Emergency support 24/7.",
    body: [
      "When someone you love has passed, the first decisions can feel overwhelming. Tlholoes Funeral Parlour has guided families in Kagiso and Krugersdorp through funeral arrangements since 1957, one clear step at a time.",
      "Speak with our team about the service, the burial and the package that suits your family. If you belong to one of our funeral schemes, we can explain what your plan includes.",
    ],
  },
  {
    slug: "cremation",
    name: "Cremation services",
    short: "Support in arranging a dignified cremation according to your family’s wishes.",
    h1: "Cremation services in Kagiso",
    title: "Cremation Services in Kagiso & Krugersdorp | Tlholoes Funeral Parlour",
    description:
      "Tlholoes Funeral Parlour helps families in Kagiso and Krugersdorp arrange a dignified cremation according to their wishes. Call 011 410 1081.",
    body: [
      "Some families choose cremation for personal, religious or practical reasons. Tlholoes Funeral Parlour supports families in Kagiso and Krugersdorp in arranging a dignified cremation according to their wishes.",
      "Call the parlour to talk through what is involved and current availability.",
    ],
  },
  {
    slug: "repatriation",
    name: "Repatriation",
    short: "Practical help coordinating the safe return of a loved one.",
    h1: "Repatriation of a loved one",
    title: "Repatriation Services | Tlholoes Funeral Parlour, Kagiso",
    description:
      "Tlholoes Funeral Parlour in Kagiso helps families coordinate the safe return of a loved one who passed away far from home. Call 011 410 1081.",
    body: [
      "When a loved one passes away far from home, bringing them back is often the first thing a family needs. Tlholoes Funeral Parlour helps families coordinate the safe return of a loved one, so they can be laid to rest where they belong.",
      "Call us as early as possible so we can explain the steps involved.",
    ],
  },
  {
    slug: "tombstones",
    name: "Tombstones",
    short: "Thoughtful memorial options to mark a life and a place of remembrance.",
    h1: "Tombstones and memorials in Kagiso",
    title: "Tombstones in Kagiso & Krugersdorp | Tlholoes Funeral Parlour",
    description:
      "Thoughtful tombstone and memorial options from Tlholoes Funeral Parlour in Kagiso 2, serving families since 1957. Call 011 410 1081.",
    body: [
      "A tombstone marks a life and gives a family a place of remembrance. Tlholoes Funeral Parlour can help you choose a memorial that suits your loved one and your family.",
      "Speak with the parlour about the options available.",
    ],
  },
  {
    slug: "exhumations",
    name: "Exhumations",
    short: "Respectful support through the arrangements and practical steps involved.",
    h1: "Exhumation services",
    title: "Exhumation Services in Kagiso | Tlholoes Funeral Parlour",
    description:
      "Tlholoes Funeral Parlour in Kagiso supports families respectfully through the arrangements and practical steps of an exhumation. Call 011 410 1081.",
    body: [
      "An exhumation is a sensitive process with practical steps that need care. Tlholoes Funeral Parlour supports families respectfully through the arrangements involved.",
      "Call the parlour to discuss your situation.",
    ],
  },
];

export const siteUrl = "https://tlholoesfunerals.com";

export const homeSeo = {
  title: "Funeral Parlour in Kagiso & Krugersdorp | Tlholoes, Est. 1957",
  description:
    "Tlholoes Funeral Parlour, 8696 Otlega Drive, Kagiso 2. Funerals, cremation, repatriation, tombstones and exhumations since 1957. 24/7 emergency support: 011 410 1081.",
};
