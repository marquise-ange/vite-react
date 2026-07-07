export const registerUser = (user) => {

    const otp = Math.floor(
        100000 + Math.random() * 900000
    );


    const newUser = {
        ...user,
        otp: otp,
        verified: false
    };


    localStorage.setItem(
        "user",
        JSON.stringify(newUser)
    );


    return otp;

};



export const verifyUser = (enteredOtp) => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );


    if (user && user.otp == enteredOtp) {

        user.verified = true;


        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        return true;

    }


    return false;

};



export const loginUser = (email, password) => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );


    if (
        user &&
        user.email === email &&
        user.password === password &&
        user.verified
    ) {

        return true;

    }


    return false;

};



export const getCurrentUser = () => {

    const user = localStorage.getItem("user");


    if (user) {

        return JSON.parse(user);

    }


    return null;

};



export const logoutUser = () => {

    localStorage.removeItem("user");

};