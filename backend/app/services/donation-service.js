import donation_model from '../models/donation.js';

//Mongoose connect for creating new Donations
export const addDonations = async(donation) =>{

    const donations = new donation_model(donation);
    return donations.save();
    
}

//Mongoose connect to find by Id
export const getDonationById = async(donationID) =>{
    // console.log("before  - ",id);
    // const donationId = {donationId : id};
    const donationById = await donation_model.findOne({donationId:donationID});
    return donationById;
}


//Mongoose to get All Meeting Notes
export const getAllDonations = async()=>{
    const allDonations = await donation_model.find().exec();
    return allDonations;
}
