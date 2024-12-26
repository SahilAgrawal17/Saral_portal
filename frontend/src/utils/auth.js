import axios from 'axios';

const signUp = async (name, email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/signup', {
            name,
            email,
            password
        });
        if (response.data.success) {
            console.log("Signup successful", response.data);
            return true;        // Return success status
        }
    } catch (error) {
        console.error("Error during signup:", error.response ? error.response.data : error.message);
    }
    return false;           // Return failure status if there's an error
};

const logIn = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/login', {
            email,
            password
        });
        if (response.data.success) {
            const { jwtToken, email, name } = response.data;
            localStorage.setItem('jwtToken', jwtToken); // Save JWT token
            console.log("Login successful", name, email);
            return true; // Return success status
        }
    } catch (error) {
        console.error("Error during login:", error.response ? error.response.data : error.message);
    }
    return false; // Return failure status if there's an error
};

export { signUp, logIn };
