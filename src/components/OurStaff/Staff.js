import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialTwitter } from "react-icons/sl";

export default function Staff({ staff }) {
    const { image, name, job } = staff;

    return (
        <div className="staff">
            <div className="staff-img">
                <img src={image} alt={name} />
            </div>
            <div className="staff-info">
                <h4 className="staff-name">{name}</h4>
                <p>{job}</p>
                <div className="staff-social">
                    <p><HiOutlineMail />Email</p>
                    <p><SlSocialTwitter />Twitter</p>
                </div>
            </div>
        </div>
    )
}
