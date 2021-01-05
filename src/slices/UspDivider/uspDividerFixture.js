export const content = {
  type: 'usp_devider',
  primary: {
    bg_brand: true,
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
