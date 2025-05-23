

export const verifylatandlon = async (req,_, next) =>{
    const lat = req.cookies?.latitude
    const lon = req.cookies?.longitude

    req.para = {lat, lon}
    next()
}