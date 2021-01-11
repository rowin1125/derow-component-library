export const content = {
  title: 'webshop',
  subtext: 'Ga voor een website die winst maakt',
  price: 'Prijs op aanvraag',
  table_icon: 'winkelmand',
  description: [
    {
      type: 'paragraph',
      text: 'Webshops die winst maken',
      spans: [
        {
          start: 0,
          end: 24,
          type: 'strong',
        },
      ],
    },
  ],
  selling_points: [
    {
      type: 'list-item',
      text: 'Alles van basis website',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Bestellen & online betalen',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Digitaal portaal voor productbeheer',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Binnen 8 weken klaar',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Zoeken met filters',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Website optimaal voor conversie',
      spans: [],
    },
    {
      type: 'list-item',
      text: '3 uur feedback verwerken',
      spans: [],
    },
  ],
  button_text: 'Webshop aanbod',
  button_link: {
    _meta: {
      type: 'product',
      uid: 'website-op-maat',
    },
  },
  _meta: {
    uid: 'webshop',
    tags: ['main'],
  },
};
export const contentTwo = {
  title: 'Website op maat',
  subtext: '+ incl designs',
  table_icon: 'onderhoud',
  price: 'Prijs op aanvraag',
  description: [
    {
      type: 'paragraph',
      text: 'Design 100% naar jouw wens',
      spans: [
        {
          start: 0,
          end: 26,
          type: 'strong',
        },
      ],
    },
  ],
  selling_points: [
    {
      type: 'list-item',
      text: 'Alles van basis website',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Premium design op maat',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Strategisch advies & begeleiding',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Optimaal geoptimaliseerd voor SEO',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Klaar binnen 8 weken',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Oneindige feedback verwerking',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Snelle werking van feedback',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Uitgebreide CMS',
      spans: [],
    },
    {
      type: 'list-item',
      text: '100% Tevredenheidsgarantie',
      spans: [],
    },
  ],
  button_text: 'Website op maat',
  button_link: {
    _meta: {
      type: 'product',
      uid: 'website-op-maat',
    },
  },
  redirect_text: null,
  _meta: {
    uid: 'website-op-maat',
    tags: ['main', 'special'],
  },
};

export const contentThree = {
  title: 'Basis website',
  subtext: 'Ga voor een website die winst maakt',
  price: 'Prijs op aanvraag',
  table_icon: 'raket',
  description: [
    {
      type: 'paragraph',
      text: 'Webshops die winst maken',
      spans: [
        {
          start: 0,
          end: 24,
          type: 'strong',
        },
      ],
    },
  ],
  selling_points: [
    {
      type: 'list-item',
      text: 'Alles van basis website',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Bestellen & online betalen',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Digitaal portaal voor productbeheer',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Binnen 8 weken klaar',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Zoeken met filters',
      spans: [],
    },
    {
      type: 'list-item',
      text: 'Website optimaal voor conversie',
      spans: [],
    },
    {
      type: 'list-item',
      text: '3 uur feedback verwerken',
      spans: [],
    },
  ],
  button_text: 'Webshop aanbod',
  button_link: {
    _meta: {
      type: 'product',
      uid: 'website-op-maat',
    },
  },
  _meta: {
    uid: 'webshop',
    tags: ['main'],
  },
};

export const withDifferentAmountOfData = JSON.parse(
  JSON.stringify(contentThree),
);
withDifferentAmountOfData.selling_points.push(
  {
    type: 'list-item',
    text: '4 uur feedback verwerken',
    spans: [],
  },
  {
    type: 'list-item',
    text: '5 uur feedback verwerken',
    spans: [],
  },
);
