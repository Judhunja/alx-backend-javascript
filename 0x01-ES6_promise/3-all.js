import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const namePromise = createUser();

  Promise.all([photoPromise, namePromise]).then((vals) => {
    const [photo, name] = vals;
    console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
  }).catch((error) => {
    console.error('Signup system offline', error);
  });
}
