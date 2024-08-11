import {SharedTransitionTag} from 'constants/constants';

export const getSharedTransitionTag = (id: string | number) => ({
  post: `${SharedTransitionTag.Post}-${id}`,
});
