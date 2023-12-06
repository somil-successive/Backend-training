export const asyncData = async (req, res) => {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("RequestTimeout");
    }, 3000);
  });

  try {
    const response = await myPromise;
  } catch (err) {
    res.status(408);
    res.json({ error: err });
  }
};
