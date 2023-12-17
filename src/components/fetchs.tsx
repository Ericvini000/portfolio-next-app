import { TRepository, repositorySchema, TRepositoryArray } from "@/schemas/repository.schema";
import api from "@/services/api"

export const fetchRepositories = async () => {
    const response = await api.get("/users/Ericvini000/repos");


    const kenzieRepos: TRepositoryArray = response.data.filter((e: TRepository) => {
        if (e.name.includes("createdInKenzie")) {
            return repositorySchema.parse(e)
        }
    })

    return kenzieRepos
}