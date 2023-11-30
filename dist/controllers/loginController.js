export const login = (req, res) => {
    console.log(req.user);
    res.json("User Authorised");
};
