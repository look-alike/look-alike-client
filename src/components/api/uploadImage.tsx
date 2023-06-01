import { client } from './client';

export async function uploadImage(imgUrl: any) {
  const base64data = imgUrl.split(',')[1];
  const formData = new FormData();
  formData.append('image', base64data);

  return await client
    .post('/predict', formData, {
      headers: {
        JWT: 'eyJ0eXAiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjg1MjM3MDc0LCJleHAiOjE2ODU4NDE4NzQsInJvbGUiOiJVU0VSIn0.EjoXlbyx_J8IcP7hvvBY17xrn4NMe8i4GnoA78R7tPI',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => console.log(err));
}
