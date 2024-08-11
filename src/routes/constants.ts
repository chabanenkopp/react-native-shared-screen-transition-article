export enum Routes {
  Home = 'Home',
  Dashboard = 'Dashboard',
  PostDetail = 'PostDetail',
}

export type RootDrawerParamList = {
  Home: undefined;
  Dashboard: undefined;
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
