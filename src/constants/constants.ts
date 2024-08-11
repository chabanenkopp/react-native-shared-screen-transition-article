import {Platform} from 'react-native';

export enum SharedTransitionTag {
  Post = 'post',
}
export const SCREEN_OFFSET_X = 20;
export const IS_ANDROID = Platform.OS === 'android';

const LOREM_IPSUM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export const TestData = [
  {
    id: '3540a061-4c8f-40a3-b61f-ff720b58b467',
    status: 'Like New',
    content: LOREM_IPSUM,
    title: 'Nissan GTR. The Car of Your Dreams.',
    images: [
      'https://www.topspeed.sk/userfiles/articles/09-08/18147/1597049353-nissan.gtr.topspeedsk.jpg',
      'https://d62-a.sdn.cz/d_62/c_img_E_E/WqS44.jpeg?fl=cro,0,101,1920,1080%7Cres,1200,,1%7Cjpg,80,,1',
    ],
  },
  {
    id: '13ed1798-873e-438e-9372-b368f88b006b',
    status: 'Like New',
    content: LOREM_IPSUM,
    title: 'McLaren F1. Just a Legend.',
    images: [
      'https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1600417640708-DAFMFBNHV2IAO7C4Q4UE/art-mg-mclarenf1lm1.jpg?format=2500w',
      'https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1600458207759-K88FMWYKN8UUYV37U1ZC/art-mg-mclarenf1lm5.jpg?format=2500w',
    ],
  },
];
