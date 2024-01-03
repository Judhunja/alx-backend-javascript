export default function getFullResponseFromAPI(success) {
  const pMise = new Promise((resolve, reject) => {
    if (success === true) {
      const obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return pMise;
}
