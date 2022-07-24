
export const loadFromLocal = () => {
    try {
        const userInLocal = localStorage.getItem("auth")
            ? JSON.parse(localStorage.getItem("auth"))
            : null;
        return userInLocal;
    } catch (e) {
        console.warn(e);
        return null;
    }
};

export const saveToLocal = (user) => {
    try {
        const serialisedState = JSON.stringify(user);
        localStorage.setItem("auth", serialisedState);
    } catch (e) {
        console.warn(e);
    }
};

export const removeFromLocal = () => {
    localStorage.removeItem("auth");
};
