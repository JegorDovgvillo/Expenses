'use server';
import { revalidateTag } from 'next/cache';

export const deleteCard = async (id: any) => {
  console.log(id);
  const request = await fetch(`http://localhost:3001/deleteCard/${id}`, {
    method: 'DELETE',
    next: { tags: ['collection'] },
  });
  const res = await request.json().then(() => {
    revalidateTag('collection');
  });
  return res;
};
