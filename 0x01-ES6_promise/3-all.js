import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pHoto = uploadPhoto();
  const naMe = createUser();

  Promise.all([pHoto, naMe]).then((vals) => {
    const [photo, name] = vals;
    console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
  });
}
