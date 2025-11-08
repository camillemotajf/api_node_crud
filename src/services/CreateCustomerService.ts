import prismaClient from "../prisma/index.js";

interface CreateCustomerProps{
    name: string
    email: string
}

class CreateCustomerService{
    async execute({ name, email }: CreateCustomerProps) {

        // tramento de erros de input do usuario
        if (!name || !email) {
            throw new Error("Not email or name filled")
        }

        // ligação com o banco de dados
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })
        return customer
    }
}

export { CreateCustomerService }