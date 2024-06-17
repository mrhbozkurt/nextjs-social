import User from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

export const createUser = async (id, first_name, last_name, image_url, email_addresses, username) => {

    try {
        await connectToDB();

        const user = await User.findByIdAndUpdate(
            {clerkId: id},
            {
                $set: {
                    clerkId: id,
                    firstName: first_name,
                    lastName: last_name,
                    profilePhoto: image_url,
                    email: email_addresses[0].email_addresses,
                    username: username,
                }
            },
            {upsert: true, new: true}
        )

        await user.save();
        return user;

    } catch (error) {
        console.error(error);
    }

};

export const deleteUser = async (id) => {
    try {
        await connectToDB();
        await User.findOneAndDelete({clerkId: id});
    } catch (error) {
        console.error(error);
    }
}