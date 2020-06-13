async function routes(fastify, options){
    fastify.get('/users', async(request, reply)=>{
        return { hello: 'world'}
    })
}

module.exports = routes