
const userValidationHandler = (req, res, next)=> {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send({ status: "400", message: "Missing required fields" });
    }
    else {
        next();
    }
};

export default userValidationHandler;