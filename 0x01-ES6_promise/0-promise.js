export default function getResponseFromAPI() {
  const pMise = new Promise((resolve, reject) => {
    const pLet = true;

    if (pLet) {
      resolve(true);
    } else {
      reject(Error(false));
    }
  });

  return pMise;
}
