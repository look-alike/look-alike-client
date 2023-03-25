import { client } from './client';

export async function uploadImage(file: any) {
  // console.log(file);
  const formData = new FormData();
  formData.append('file', file);

  return await client.post('/test', formData).then((res) => console.log(res));
}

/**
 async function postComment(props: CommentProps) {
  const token = localStorage.getItem("token");
  return await client
    .post(`/community/post/${props.postId}`, JSON.stringify(props), {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
}
 */
