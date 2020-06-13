import { get } from 'lodash';

export default function(entity, router, options) {
    try {
        const methods = require(`@app/controllers/${entity}.controller.js`);
    
        router.get(`/${entity}s`, authentication('index'), methods.index)
        router.get(`/${entity}/:id`, authentication('show'), methods.show)
        router.post(`/${entity}`,  authentication('create'), methods.create)
        router.put(`/${entity}/:id`, authentication('update'), methods.update)
        router.delete(`/${entity}/:id`, authentication('delete'), methods.remove)

        return router;
    } catch(error) {
        return error.message
    }

    function authentication (method) {
        if(get(options,'auth.methods',[]).includes(method))
            return options.auth.func
         return (req,res,next) => next();
    }
}

