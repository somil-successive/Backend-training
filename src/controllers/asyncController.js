export const asyncData = async (req, res) => {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Time Exceeds");
    }, 3000);
  });

  try {
    const response = await myPromise;
    console.log(response);
  } catch (err) {
    res.json({ error: err });
  }
};
