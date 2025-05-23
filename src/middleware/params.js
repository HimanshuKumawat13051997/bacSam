

export const verifylatandlon = async (req,_, next) =>{
    let lat = req.cookies?.latitude
    let lon = req.cookies?.longitude

    if (!lat && !lon){
        lat = 77.1234
        lon = 28.1234
    }
    req.para = {lat, lon}
    next()
}