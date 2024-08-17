export enum Routes {
  Home = 'Home',
  PostDetail = 'PostDetail',
}

export type RootDrawerParamList = {
  Home: undefined;
  PostDetail: {
    post: {
      id: string;
      status: string;
      title: string;
      content: string;
      images: string[];
    };
  };
};
