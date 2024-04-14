import resources from './../models/resource.js'


export const search = async (params = {}) => {
    const resource = await resources.find(params).exec();
    return resource;
}

export const save = async (resource) => {
    const newResource = new resources(resource);
    return newResource.save();
}

export const get = async (id) => {
    const resource = resources.find({id : id}).exec();
    return resource;
}

export const deleteResource = async (id) => {
    const resource = resources.deleteOne({id : id}).exec();
    return resource;
}

export const updateResource = async (id, body) => {
    const resource = resources.findOneAndUpdate({id : id}, body);
    return resource;
}