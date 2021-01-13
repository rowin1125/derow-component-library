export const content = {
  type: 'grid_card',
  primary: {
    bg_brand: false,
    overflow: 'none',
    grid_header: 'Title here',
    grid_description: null,
  },
  fields: [
    {
      grid_col_image_title: 'Een nieuwe website',
      grid_col_img: {
        dimensions: {
          width: 630,
          height: 240,
        },
        alt: 'Derow',
        copyright: null,
        url:
          'https://images.prismic.io/derow/a9d218b4-2837-446c-8759-119b48ecb127_google+ads.jpg?auto=compress,format&rect=0,84,768,293&w=630&h=240',
      },
      grid_col_icon: null,
      grid_col_card_variant: 'primary',
      grid_col_content: [
        {
          type: 'paragraph',
          text:
            'Een website moet gebruiksvriendelijk & technisch op orde zijn, maar natuurlijk ook passen bij jouw stijl. Derow werkt met gebruiksvriendelijke systemen en implementeer SEO, zodat je website wordt gevonden.',
          spans: [],
        },
      ],
      grid_col_link_text: 'Onze producten',
      grid_col_link_variant: 'primary',
      grid_col_link: {
        _linkType: 'Link.document',
        _meta: {
          uid: 'producten',
          type: 'producten',
        },
      },
    },
    {
      grid_col_image_title: 'SEO: Hoger in Google',
      grid_col_img: {
        dimensions: {
          width: 630,
          height: 240,
        },
        alt: 'Derow',
        copyright: null,
        url:
          'https://images.prismic.io/derow/547e16a7-dbc3-4a56-9627-9ab8e8802d8c_google-rank.jpg?auto=compress,format&rect=0,8,640,244&w=630&h=240',
      },
      grid_col_icon: null,
      grid_col_card_variant: 'primary',
      grid_col_content: [
        {
          type: 'paragraph',
          text:
            'Bovenaan in Google door SEO? Met duurzame zoekmachine-optimalisatie behaal je het beste resultaat. Derow kan jouw On-Page SEO en Off-Page SEO optimaliseren voor een beter vindbare website.',
          spans: [],
        },
      ],
      grid_col_link_text: 'Even overleggen?',
      grid_col_link_variant: 'primary',
      grid_col_link: {
        _linkType: 'Link.document',
        _meta: {
          uid: 'contact',
          type: 'landing_page',
        },
      },
    },
    {
      grid_col_image_title: 'Winstgevende websites!',
      grid_col_img: {
        dimensions: {
          width: 630,
          height: 240,
        },
        alt: 'Derow',
        copyright: null,
        url:
          'https://images.prismic.io/derow/70dca172-66c2-4721-81a4-e68da016e211_design.jpg?auto=compress,format&rect=0,34,285,109&w=630&h=240',
      },
      grid_col_icon: null,
      grid_col_card_variant: 'primary',
      grid_col_content: [
        {
          type: 'paragraph',
          text:
            'Je website is je visite kaartje of de core business van je bedrijf. Dan wil je dat de website doet waarvoor hij gemaakt is: bezoekers omzetten in klanten. Derow helpt hierbij om samen naar de beste website voor jouw bedrijf te kijken.',
          spans: [],
        },
      ],
      grid_col_link_text: 'Websites',
      grid_col_link_variant: 'primary',
      grid_col_link: {
        _linkType: 'Link.document',
        _meta: {
          uid: 'website-op-maat',
          type: 'product',
        },
      },
    },
  ],
};

export const conentWithBgBrand = JSON.parse(JSON.stringify(content));
conentWithBgBrand.primary.bg_brand = true;

export const contentWithSecCards = JSON.parse(JSON.stringify(content));
contentWithSecCards.fields[0].grid_col_card_variant = 'secondary';
contentWithSecCards.fields[0].grid_col_link_variant = 'tertairy';

contentWithSecCards.fields[1].grid_col_card_variant = 'secondary';
contentWithSecCards.fields[1].grid_col_link_variant = 'tertairy';

contentWithSecCards.fields[2].grid_col_card_variant = 'secondary';
contentWithSecCards.fields[2].grid_col_link_variant = 'tertairy';
