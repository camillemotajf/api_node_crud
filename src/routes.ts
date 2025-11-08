import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import CreateCustomerController from "./controllers/CreateCustomerController.js";
import { ListCustomerController } from "./controllers/ListCustomerController.js";
import { DeleteCostumerController } from "./controllers/DeleteCustomerController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) =>{
        return {
            ok: true
        }
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply:FastifyReply ) => {
        return new ListCustomerController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply:FastifyReply ) => {
        return new DeleteCostumerController().handle(request, reply)
    })
}