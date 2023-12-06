export const asyncData = async (req, res) => {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Time Limit Exceeds");
    }, 3000);
  });

  try {
    await myPromise;
  } catch (err) {
    res.status(408);
    res.json({ error: err });
  }
};
