export const content = {
  type: 'usp_devider',
  primary: {
    bg_brand: true,
    image: null,
  },
  fields: [
    {
      usp_devider_icon: 'personal',
      usp_content: [
        {
          type: 'heading2',
          text: 'Persoonlijk',
          spans: [],
        },
      ],
    },
    {
      usp_devider_icon: 'fire',
      usp_content: [
        {
          type: 'heading2',
          text: 'Succes gedreven',
          spans: [],
        },
      ],
    },
    {
      usp_devider_icon: 'graph',
      usp_content: [
        {
          type: 'heading2',
          text: 'Perfectionistisch',
          spans: [],
        },
      ],
    },
  ],
};

export const contentWithoutBg = JSON.parse(JSON.stringify(content));
contentWithoutBg.primary.bg_brand = false;

const extraContent = {
  type: 'paragraph',
  text: 'Extra text hier',
  spans: [],
};

export const contentWithExtraText = JSON.parse(JSON.stringify(content));
contentWithExtraText.fields[0].usp_content[1] = extraContent;
contentWithExtraText.fields[1].usp_content[1] = extraContent;
contentWithExtraText.fields[2].usp_content[1] = extraContent;

export const contentWithImageBg = JSON.parse(JSON.stringify(content));
contentWithImageBg.primary.usp_devider_image = {
  url:
    'https://images.prismic.io/derow/659b68f7-39f6-4b57-bc88-7f2a403eaaa3_pexels-negative-space-169573.jpg?auto=compress,format',
};

export const contentWithImageAndFullBg = JSON.parse(JSON.stringify(content));
contentWithImageAndFullBg.primary.all_bg_brand = true;
contentWithImageAndFullBg.primary.usp_devider_image = {
  url:
    'https://images.prismic.io/derow/659b68f7-39f6-4b57-bc88-7f2a403eaaa3_pexels-negative-space-169573.jpg?auto=compress,format',
};
