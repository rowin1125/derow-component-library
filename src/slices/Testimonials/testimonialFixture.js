export const content = {
  type: 'testimonial',
  primary: {
    title: null,
    description: [
      {
        type: 'paragraph',
        text: '',
        spans: [],
      },
    ],
    rotate_interval: '6',
    bg_brand: false,
    overflow: 'none',
  },
  fields: [
    {
      image: {
        dimensions: {
          width: 500,
          height: 500,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/78a1aab7-dd0d-4ba4-b740-3c4e1f7f125c_Screenshot+2020-03-12+at+21.38.00.png?auto=compress,format&rect=379,0,944,944&w=500&h=500',
      },
      icon: {
        dimensions: {
          width: 331,
          height: 200,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/6ec8e3da-fcfa-4f1c-9639-55d26b0f1d54_favicon.png?auto=compress,format&rect=0,0,1002,605&w=331&h=200',
      },
      person_title: 'E S I - Installatietechniek b.v.',
      person_content: [
        {
          type: 'paragraph',
          text:
            'Derow heeft ons idee qua styling en  functionaliteit tot in de puntjes weten te vertalen naar een live website. Goede input, communicatie en vooral een prettige samenwerking, een aanrader!',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'Bekijk E S I',
          spans: [
            {
              start: 7,
              end: 12,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://esi-install.nl/',
              },
            },
          ],
        },
      ],
    },
    {
      image: {
        dimensions: {
          width: 500,
          height: 500,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/fbabb90f-b04e-4202-946b-517f58b96e4c_Screenshot+2020-03-12+at+21.35.18.png?auto=compress,format&rect=380,0,941,941&w=500&h=500',
      },
      icon: {
        dimensions: {
          width: 517,
          height: 200,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/cc44a996-2a15-42d3-9798-c14ed4992da4_favicon.png?auto=compress,format&rect=0,0,763,295&w=517&h=200',
      },
      person_title: 'M.Pals Stukadoors',
      person_content: [
        {
          type: 'paragraph',
          text:
            'De samenwerking verliep heel soepel. Goede communicatie, veel input van Derow met een goed oog voor mij wensen. Waardoor ik nu een super mooie site heb voor mijn bedrijf.',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'Bekijk M.Pals Stukadoors',
          spans: [
            {
              start: 7,
              end: 24,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://mpalsstukadoors.nl/',
              },
            },
          ],
        },
      ],
    },
  ],
};

export const contentWithTitle = JSON.parse(JSON.stringify(content));
contentWithTitle.primary.title = 'Zo denken onze klanten over Derow';

export const contentWithBg = JSON.parse(JSON.stringify(content));
contentWithBg.primary.bg_brand = true;
contentWithBg.primary.title = 'Zo denken onze klanten over Derow';

export const contentWithOverflow = JSON.parse(JSON.stringify(content));
contentWithOverflow.primary.overflow = 'from_brand';
contentWithOverflow.primary.title = 'Zo denken onze klanten over Derow';

export const contentWithCustomInterval = JSON.parse(JSON.stringify(content));
contentWithCustomInterval.primary.rotate_interval = '2';
contentWithCustomInterval.primary.title = 'Interval is now 2 sec';
