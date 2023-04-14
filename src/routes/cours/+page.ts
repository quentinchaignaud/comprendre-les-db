import type { PageLoad } from './$types';
import { pb } from '$lib/pocketbase'

export const load = (async () => {
  const records = await pb.collection('courses').getFullList({
      sort: '-created',
  });
  return { 
    courses: records
  };
}) satisfies PageLoad;
