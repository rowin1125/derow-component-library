export const content = {
  type: 'usp_card',
  primary: {
    bg_brand: false,
    overflow: 'none',
  },
  fields: [
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Meer conversie',
          spans: [],
        },
      ],
      usp_icon: 'stats',
      link: {
        _meta: {
          type: 'post',
          uid: 'waarom-conversies-belangrijk-is',
        },
      },
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Goed webdesign',
          spans: [],
        },
      ],
      usp_icon: 'edit',
      link: {
        _meta: {
          type: 'post',
          uid: 'succes-met-een-goed-design',
        },
      },
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Naamsbekendheid',
          spans: [],
        },
      ],
      usp_icon: 'hearing',
      link: {
        _meta: {
          type: 'post',
          uid: 'sterke-merkbekendheid',
        },
      },
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Geoptimaliseerd',
          spans: [],
        },
      ],
      usp_icon: 'speedtest',
      link: {
        _meta: {
          type: 'post',
          uid: 'paginasnelheid',
        },
      },
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Portfolio',
          spans: [],
        },
      ],
      usp_icon: 'cube',
      link: {
        _meta: {
          type: 'post',
          uid: 'portfoliowebsite-voor-uw-bedrijf',
        },
      },
    },
  ],
};

export const contentBg = JSON.parse(JSON.stringify(content));
contentBg.primary.bg_brand = true;

export const contentOverflow = JSON.parse(JSON.stringify(content));
contentOverflow.primary.overflow = 'to_brand';

export const contentSimple = {
  type: 'usp_card',
  primary: {
    bg_brand: false,
    overflow: 'none',
  },
  fields: [
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Meer conversie',
          spans: [],
        },
      ],
      usp_icon: 'stats',
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Goed webdesign',
          spans: [],
        },
      ],
      usp_icon: 'edit',
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Naamsbekendheid',
          spans: [],
        },
      ],
      usp_icon: 'hearing',
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Geoptimaliseerd',
          spans: [],
        },
      ],
      usp_icon: 'speedtest',
    },
    {
      usp_text: [
        {
          type: 'heading3',
          text: 'Portfolio',
          spans: [],
        },
      ],
      usp_icon: 'cube',
    },
  ],
};

export const contentWithExtraText = {
  type: 'usp_card',
  primary: {
    bg_brand: false,
    overflow: 'none',
  },
  fields: [
    {
      usp_text: [
        {
          type: 'heading2',
          text: '20+',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'Bedrijven',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'geholpen',
          spans: [],
        },
      ],
      usp_icon: 'lightbulb',
      link: null,
    },
    {
      usp_text: [
        {
          type: 'heading2',
          text: '20+',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'Applicaties ',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'gebouwd',
          spans: [],
        },
      ],
      usp_icon: 'stack',
      link: null,
    },
    {
      usp_text: [
        {
          type: 'heading2',
          text: '94% ',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'Tevreden',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'klanten',
          spans: [],
        },
      ],
      usp_icon: 'review',
      link: null,
    },
  ],
};
