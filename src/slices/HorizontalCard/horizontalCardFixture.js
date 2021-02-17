export const content = {
  type: 'card',
  primary: {
    title: 'heading intro here',
  },
  fields: [
    {
      img: {
        dimensions: {
          width: 600,
          height: 600,
        },
        alt: null,
        copyright: null,
        url:
          'https://images.prismic.io/derow/a9d218b4-2837-446c-8759-119b48ecb127_google+ads.jpg?auto=compress,format',
      },
      animate_origin: 'bottom',
      variant: 'transparent',
      image_large: false,
      text_large: false,
      layout: null,
      round_image: false,
      img_first: false,
      title: 'Website laten maken, hoe werkt dat?',
      title_center: false,
      body1: [
        {
          type: 'paragraph',
          text:
            'Hoe wij dit doen? Dit doen we uiteraard door onze unieke kwaliteiten zoals hierboven beschreven terug te laten komen in de website. Is dat alles...? Nee, wij gaat een stapje verder door naar alle details te kijken en proberen samen met jou het maximale te bereiken.',
          spans: [],
        },
        {
          type: 'paragraph',
          text:
            'Samen gaan we kijken naar de problemen (mogelijkheden) die we samen kunnen oplossen. Wij proberen jou maximaal te ondersteunen en waar nodig advies te geven zodat jij je nergens zorgen over hoeft te maken. Want laten we eerlijk zijn, het is wel zo lekker als al jouw problemen uit handen worden genomen door onze experts.',
          spans: [],
        },
      ],
      text_center: false,
      button_variant: 'primary',
      call_to_action_link: {
        _linkType: 'Link.document',
        _meta: {
          uid: 'producten',
        },
      },
      action_button_text: 'Onze mogelijkheden',
    },
  ],
};

export const contentPrimaryVariant = JSON.parse(JSON.stringify(content));
contentPrimaryVariant.fields[0].variant = 'primary';
contentPrimaryVariant.fields[0].round_image = true;

export const contentSecondaryVariant = JSON.parse(JSON.stringify(content));
contentSecondaryVariant.fields[0].variant = 'secondary';
contentSecondaryVariant.fields[0].round_image = true;
contentSecondaryVariant.fields[0].img_first = true;
contentSecondaryVariant.fields[0].button_variant = 'tertairy';

export const contentWitLargeText = JSON.parse(JSON.stringify(content));
contentWitLargeText.fields[0].text_large = true;
contentWitLargeText.fields[0].img_first = true;

export const contentWithBg = JSON.parse(JSON.stringify(content));
contentWithBg.primary.bg_brand = true;
contentWithBg.fields[0].variant = 'primary';
contentWithBg.fields[0].round_image = true;
contentWithBg.fields[0].img_first = true;

export const contentWithOverflow = JSON.parse(JSON.stringify(content));
contentWithOverflow.primary.overflow = 'to_brand';
contentWithOverflow.fields[0].variant = 'primary';
contentWithOverflow.fields[0].round_image = true;
contentWithOverflow.fields[0].img_first = true;

export const contentTransparentVariant = JSON.parse(JSON.stringify(content));
contentTransparentVariant.primary.bg_brand = true;
contentTransparentVariant.fields[0].variant = 'transparent';
contentTransparentVariant.fields[0].round_image = true;
contentTransparentVariant.fields[0].button_variant = 'tertairy';

export const contentWithLargeImage = JSON.parse(JSON.stringify(content));
contentWithLargeImage.primary.bg_brand = true;
contentWithLargeImage.fields[0].variant = 'transparent';
contentWithLargeImage.fields[0].button_variant = 'tertairy';
contentWithLargeImage.fields[0].layout = 'large_image';

export const contentWithSquareBg = JSON.parse(JSON.stringify(content));
contentWithSquareBg.primary.bg_brand = true;
contentWithSquareBg.fields[0].variant = 'transparent';
contentWithSquareBg.fields[0].img_first = true;
contentWithSquareBg.fields[0].button_variant = 'tertairy';
contentWithSquareBg.fields[0].layout = 'large_image';
contentWithSquareBg.fields[0].square_bg = true;
contentWithSquareBg.fields[0].body1 = [
  {
    type: 'paragraph',
    text:
      'Hoe wij dit doen? Dit doen we uiteraard door onze unieke kwaliteiten zoals hierboven beschreven terug te laten komen in de website. Is dat alles...? Nee, wij gaat een stapje verder door naar alle details te kijken en proberen samen met jou het maximale te bereiken.',
    spans: [],
  },
];
