export function index(req, res){
    res.status(200).json({
        message:"show all admin"
    })
}

export function show(req, res){
    res.status(200).json({
        message:"show current admin"
    })
}

export function create(req, res){
    res.status(200).json({
        message:"create admin"
    })
}

export function update(req, res){
    res.status(200).json({
        message:"update current admin"
    })
}


export function remove(req, res){
    res.status(200).json({
        message:"update current admin"
    })
}