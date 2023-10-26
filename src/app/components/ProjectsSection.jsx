"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 3,
        title: "VIdeo-Game Application",
        description: "Java Little-Game Proyect",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 9,
        title: "Game controller",
        description: "3D Model",
        image: "/images/projects/9.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Nightstand",
        description: "3D Model",
        image: "/images/projects/7.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "Monopli car",
        description: "3D Model",
        image: "/images/projects/8.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "/",
    },

    {
        id: 10,
        title: "Among Us figurin",
        description: "3D Model",
        image: "/images/projects/10.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 0,
        title: "Next Portfolio Website",
        description: "portfolio Web and 3D Modeler",
        image: "/images/projects/0.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 11,
        title: "3D Human Sculpt",
        description: "3D Model",
        image: "/images/projects/11.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 12,
        title: "3D Headphone model",
        description: "3D Model",
        image: "/images/projects/12.png",
        tag: ["All", "3D"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Potoshop Repository",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 1,
        title: "Next Hotels Website",
        description: "Hotel Reservation Page",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },

    {
        id: 4,
        title: "Marketing Food-Proyect",
        description: "La Crepa Creperia",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Hotels Reservation Proyect",
        description: "CSS, Html, Js learn",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Swipe Landing-Page",
        description: "Responsive Design",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="3D"
                    isSelected={tag === "3D"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            className="border border-white"
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
