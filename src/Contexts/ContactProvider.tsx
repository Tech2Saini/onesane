import ContactContext from "@/Contexts/AuthContact";
import { ReactNode, useContext } from "react";
import BlogContext from "@/Contexts/BlogContext";

const ContactProvider = ({ children }: { children: ReactNode }) => {
    const { getCsrfToken } = useContext(BlogContext);

    const apiRequest = async (endpoint: string, method = "GET", data: any = null) => {
        const baseUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/`;
        const csrfToken = await getCsrfToken();
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken || "",
                "X-API-KEY": import.meta.env.VITE_WRITE_API_KEY,
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(baseUrl + endpoint, options);

        console.log("The CSRF token is: ", options);
        if (response.status !== 200) {
            const errorText = await response.text();
            console.log(`HTTP error! status: ${response.status}, message: ${JSON.parse(errorText).error}`);
            return {
                "success": false,
                "message": JSON.parse(errorText).error
            }
        }
        return {
            "success": true,
            "message": (await response.json()).message
        }
    };

    const saveContact = async (data: any) => {
        const new_data = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            company: data.company,
            service: data.service,
            message: data.message
        }
        return await apiRequest("contact/", "POST", new_data);
    };

    return (
        <ContactContext.Provider value={{ saveContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;
