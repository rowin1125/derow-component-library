export const content = {
  type: 'sticky_text',
  primary: {
    sticky_title:
      'Waarom Derow de juiste keuze is (refresh if colors are weird)',
    bg_brand: false,
    show_wave: false,
    show_diagonal: false,
  },
  fields: [
    {
      sticky_image: {
        dimensions: {
          width: 600,
          height: 600,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/a9d218b4-2837-446c-8759-119b48ecb127_google+ads.jpg?auto=compress,format&rect=0,0,768,461&w=500&h=300',
      },
      item_title: 'Sales Pitch 1',
      item_content: [
        {
          type: 'paragraph',
          text:
            'Deze tekst wordt opgelicht als de correct afbeelding in het midden van het scherm komt. Hier komt de sales pitch die ondersteunt wordt door de afbeelding.',
          spans: [],
        },
      ],
    },
    {
      sticky_image: {
        dimensions: {
          width: 600,
          height: 600,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/a9d218b4-2837-446c-8759-119b48ecb127_google+ads.jpg?auto=compress,format&rect=0,0,768,461&w=500&h=300',
      },
      item_title: 'Sales Pitch 2',
      item_content: [
        {
          type: 'paragraph',
          text:
            'Deze tekst wordt opgelicht als de correct afbeelding in het midden van het scherm komt. Hier komt de sales pitch die ondersteunt wordt door de afbeelding.',
          spans: [],
        },
      ],
    },
    {
      sticky_image: {
        dimensions: {
          width: 600,
          height: 600,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/a9d218b4-2837-446c-8759-119b48ecb127_google+ads.jpg?auto=compress,format&rect=0,0,768,461&w=500&h=300',
      },
      item_title: 'Sales Pitch 3',
      item_content: [
        {
          type: 'paragraph',
          text:
            'Deze tekst wordt opgelicht als de correct afbeelding in het midden van het scherm komt. Hier komt de sales pitch die ondersteunt wordt door de afbeelding.',
          spans: [],
        },
      ],
    },
  ],
};

export const contentWithBgBrand = JSON.parse(JSON.stringify(content));
contentWithBgBrand.primary.bg_brand = true;

export const contentWithBreakerWhite = JSON.parse(JSON.stringify(content));
contentWithBreakerWhite.primary.show_diagonal = true;
contentWithBreakerWhite.primary.show_wave = true;

export const contentWithBreakerBrand = JSON.parse(JSON.stringify(content));
contentWithBreakerBrand.primary.bg_brand = true;
contentWithBreakerBrand.primary.show_diagonal = true;
contentWithBreakerBrand.primary.show_wave = true;

export const contentWithWaveBreaker = JSON.parse(JSON.stringify(content));
contentWithWaveBreaker.primary.show_wave = true;

export const contentWithDiagonalBreaker = JSON.parse(JSON.stringify(content));
contentWithDiagonalBreaker.primary.show_diagonal = true;
