
import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (err) {
      next(err);
    }
};

export const updateHotel = async (req, res, next) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      next(err);
    }
  };
  export const deleteHotel = async (req, res, next) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted.");
    } catch (err) {
      next(err);
    }
  };

  //get hotel by id single record
  export const getSingleHotel = async (req, res, next) => {
    const { id } = req.body;
    try {
      const hotel = await Hotel.findOne({_id:id});
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  };

  export const getHotel = async (req, res, next) => {
    try {
      const hotel = await Hotel.find();
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  };

  //get all hotel by destination
  export const getHotelWithName = async (req, res, next) => {

    const { name } = req.body;

    // Assign a default value if name is not provided
    const cityName = name;

    try {
      const hotel = await Hotel.find({city: name});
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  };

