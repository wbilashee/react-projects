import React from "react";
import { FaDollarSign, FaLinkedin, FaPhone, FaStore, FaBlogger, FaBook, FaBriefcase, FaInfo } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";

const submenuLinks = [
    {
        page: "Product",
        links: [
            { label: "overview", icon: <FaBook />, url: "/overview" },
            { label: "pricing", icon: <FaDollarSign />, url: "/pricing" },
            { label: "marketplace", icon: <FaStore />, url: "/marketplace" },
        ]
    }, {
        page: "Company",
        links: [
            { label: "about", icon: <FaInfo />, url: "/about" },
            { label: "team", icon: <BsPeopleFill />, url: "/team" },
            { label: "blog", icon: <FaBlogger />, url: "/blog" },
            { label: "career", icon: <FaBriefcase />, url: "/career" },
        ]
    }, {
        page: "Connect",
        links: [
            { label: "contact", icon: <FaPhone />, url: "/contact" },
            { label: "newsletter", icon: <HiOutlineMail />, url: "/newsletter" },
            { label: "linkedin", icon: <FaLinkedin />, url: "/linkedin" },
        ]
    },
];

export default submenuLinks;