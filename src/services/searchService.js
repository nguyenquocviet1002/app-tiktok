import * as request from '@/utils/request';

const search = async (q, type = 'less') => {
  try {
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default search;
