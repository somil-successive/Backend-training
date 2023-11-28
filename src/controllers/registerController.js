export const register = (req, res) => {
  console.log(req.user);
  res.json("Registered Successfully");
};
