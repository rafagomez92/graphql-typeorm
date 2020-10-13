import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql' //Nos ayuda a convertir la clase obtenida de ping resolver a un schema 

import { PingResolver } from './resolvers/ping'
import { ProductResolver } from './resolvers/ProductResolver'

export async function startServer() {

    const app = express()
    
    app.use(express.json())
    
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, ProductResolver],
            validate: false
        }),  
        context: ({req, res}) => ({req, res})      
    })
    
    server.applyMiddleware({app, path: '/graphql'}) //app para el servidor que estamos usando y path para la ruta

    return app;
    
}

