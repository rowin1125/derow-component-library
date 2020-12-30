export const content = {
  type: 'usp_card',
  primary: {
    bg_brand: false,
    overflow: 'none',
  },
  fields: [
    {
      title: 'Meer conversie',
      usp_icon: 'stats',
      link: {
        _meta: {
          type: 'post',
          uid: 'waarom-conversies-belangrijk-is',
        },
      },
    },
    {
      title: 'Goed webdesign',
      usp_icon: 'edit',
      link: {
        _meta: {
          type: 'post',
          uid: 'succes-met-een-goed-design',
        },
      },
    },
    {
      title: 'Naamsbekendheid',
      usp_icon: 'hearing',
      link: {
        _meta: {
          type: 'post',
          uid: 'sterke-merkbekendheid',
        },
      },
    },
    {
      title: 'Geoptimaliseerd',
      usp_icon: 'speedtest',
      link: {
        _meta: {
          type: 'post',
          uid: 'paginasnelheid',
        },
      },
    },
    {
      title: 'Portfolio',
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
