import data from "../utils/mockData.js";
const getData = (req, res) => {
    res.json(data);
};
const postData = (req, res) => {
    const newD = req.body;
    data.push(newD);
    res.send(data);
};
export { getData, postData };
