import api from "@/services/api"

export interface Repository {
    name: string;
    html_url: string;
    description: string;
    language: string;
    app_url: string;
}

export const fetchRepositories = async () => {
    const response = await api.get("/users/Ericvini000/repos");
    return response.data
}