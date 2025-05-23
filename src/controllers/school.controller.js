import { Sequelize } from "sequelize";
import { School } from "../models/school.model.js";



const addSchool = async (req, res) => {
  const {name, address, longitude, latitude} = req.body;
  
  const createdSchool = await School.create({
    name,
    address,
    longitude,
    latitude
  })

  if (!createdSchool) {
    throw new Error('Error creating school');
  }

  return res
    .status(201)
    .json(createdSchool);
}


const getallSchool = async(req, res) => {
  const {lat, lon} = req.para
  const schools = await School.findAll({
    // attributes:{
    //   include: [
    //     [
    //       Sequelize.literal(`6371 * acos(
    //         cos(radians(${lat}))
    //         * cos(radians(latitude))
    //         * cos(radians(longitude) - radians(${lon}))
    //         + sin(radians(${lat})) * sin(radians(latitude))
    //         )
    //         `),
    //         'distance'
    //     ]
    //   ]
    // },
    order: Sequelize.literal(`
        6371 * acos(
          cos(radians(${lat}))
          * cos(radians(latitude))
          * cos(radians(longitude) - radians(${lon}))
          + sin(radians(${lat})) * sin(radians(latitude))
        )
      `),
  })
  if (!schools) throw new Error('Error fetching schools');

  return res
    .status(201)
    .json(schools);
}

export {
  addSchool,
  getallSchool
};