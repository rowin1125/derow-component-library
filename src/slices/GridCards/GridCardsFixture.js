export const content = {
  type: 'grid_card',
  primary: {
    bg_brand: false,
    overflow: 'none',
    grid_header: 'Title here',
    grid_description: [
      {
        type: 'paragraph',
        text:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aperiam porro asperiores fuga, quibusdam reprehenderit perspiciatis sint laudantium qui hic architecto repellat ipsum inventore sequi nam. Sed amet odit aut!',
        spans: [],
      },
    ],
  },
  fields: [
    {
      grid_col_img: {
        dimensions: {
          width: 630,
          height: 240,
        },
        alt: 'Derow',
        copyright: null,
        url:
          'https://images.prismic.io/derow/2c59e00e-699c-4c18-aa25-0f5a491a603a_derow-contact.jpg?auto=compress,format&rect=0,86,600,229&w=630&h=240',
      },
      grid_col_icon: 'telefoon',
      grid_col_card_variant: 'primary',
      grid_col_content: [
        {
          type: 'paragraph',
          text:
            'Neem telefonisch contact op met Derow en krijg advies op maat van een van onze experts via 0642655790.',
          spans: [],
        },
      ],
      grid_col_link_text: 'Neem contact op',
      grid_col_link_variant: 'primary',
      grid_col_link: {
        _linkType: 'Link.web',
        url: 'tel:+31642655790',
        target: '_blank',
      },
    },
    {
      grid_col_img: {
        dimensions: {
          width: 630,
          height: 240,
        },
        alt: 'Derow',
        copyright: null,
        url:
          'https://images.prismic.io/derow/4dc595d6-f237-49a4-a7f1-3fc79e19095a_derow-mail.jpg?auto=compress,format&rect=0,86,600,229&w=630&h=240',
      },
      grid_col_icon: 'mail',
      grid_col_card_variant: 'primary',
      grid_col_content: [
        {
          type: 'paragraph',
          text:
            'Even makkelijk alles op de mail zetten mag ook, we hoeven natuurlijk niet te bellen (is wel echt leuk hoor)',
          spans: [],
        },
      ],
      grid_col_link_text: 'Mail met ons',
      grid_col_link_variant: 'primary',
      grid_col_link: {
        _linkType: 'Link.web',
        url: 'mailto:rowin@derow.nl',
        target: '_blank',
      },
    },
    {
      grid_col_img: {
        dimensions: {
          width: 630,
          height: 240,
        },
        alt: 'Derow',
        copyright: null,
        url:
          'https://images.prismic.io/derow/fa219a39-4cb4-43c9-a7ed-d16039cf4d62_derow-whatsapp.jpg?auto=compress,format&rect=0,86,600,229&w=630&h=240',
      },
      grid_col_icon: 'whatsapp',
      grid_col_card_variant: 'primary',
      grid_col_content: [
        {
          type: 'paragraph',
          text:
            'Stuur ons anders even gewoon simpel een appje... het natuurlijk wel 2020 ... dan mag dat wel hoor',
          spans: [],
        },
      ],
      grid_col_link_text: 'App met ons',
      grid_col_link_variant: 'primary',
      grid_col_link: {
        _linkType: 'Link.web',
        url: 'https://api.whatsapp.com/send?phone=31642655790',
        target: '_blank',
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
