import { data } from "../../src/utils/mockData.js";
const getData = (req, res) => {
    console.log(req.user);
    res.json(data);
};
const postData = (req, res) => {
    const newD = req.body;
    data.push(newD);
    res.send(data);
};
export { getData, postData };
