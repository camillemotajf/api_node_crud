import prismaClient from "../prisma/index.js";

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error("Not a valid customer id.")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id 
            }
        })

        if (!findCustomer) {
            throw new Error("Invalid client.")
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })


        return {
            message: "Successuly deleted"
        }
    }
}

export { DeleteCustomerService }