import type { Load } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase'

export const load : Load = (async ({ params }) => {
  const record = await pb.collection('lessons').getFirstListItem(`slug="${params.slug_lesson}"`);
  
  return { 
    lesson: record,
  }; 
})