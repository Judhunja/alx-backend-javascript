import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((vals) => {
      const [photo, name] = vals;
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
