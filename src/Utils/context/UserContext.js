import { createContext } from "react";

const userContext = createContext({
    user: "default user"
})

export default userContext;