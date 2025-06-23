const logoutController = {};

logoutController.logout = async (req, res) => {
    
    res.clearCookie("authToken", {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
    });

    return res.status(200).json({ message: "Session closed" });

};

export default logoutController;