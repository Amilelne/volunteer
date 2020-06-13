const path = require("path");
const fastifyMongooseAPI = require('fastify-mongoose-api');
const fastifyFormbody = require('fastify-formbody');

const fastify = require('fastify')({
    logger: true
});

fastify.register(fastifyFormbody);
fastify.register(require('fastify-cors'));


fastify.register(require('./routes/route'),{prefix: '/api'})

const distDir = "/dist/volunt";

fastify.register(require('fastify-static'), {
    root: path.join(process.cwd(), distDir),
    prefix: '/'
});

const address = "0.0.0.0"
const port = 3000

const app = async (port, address) => {
    try{
        await fastify.listen(port, address)
    } catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

app(port, address)