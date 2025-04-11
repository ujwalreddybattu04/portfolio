"use client";

import React from "react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "machine learning",
    title: "Brain Tumor Detection",
    description:
      "An AI-based system utilizing Convolutional Neural Networks to classify brain MRI images into four categories: Glioma, Meningioma, No Tumor, and Pituitary.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "OpenCV" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
    image: "/assets/projects/thumb1.jpg",
    github: "https://github.com/ujwalreddybattu04/Brain-Tumor-Detection",
  },
  {
    num: "02",
    category: "deep learning",
    title: "LSTM-Based Next Word Prediction",
    description:
      "A deep learning model utilizing Long Short-Term Memory (LSTM) networks to predict the next word in a given sequence, trained on Shakespeare's Hamlet.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Natural Language Processing (NLP)" },
      { name: "LSTM" },
    ],
    image: "/assets/projects/thumb2.jpg",
    github:
      "https://github.com/ujwalreddybattu04/LSTM-Based-Next-word-predection",
  },
  {
    num: "03",
    category: "machine learning",
    title: "Spam Email Prediction",
    description:
      "An AI-powered application that predicts the likelihood of an email being spam, featuring functionalities like spam score analysis, email summarization, and multiple input methods including text, file upload, and speech.",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Natural Language Processing (NLP)" },
      { name: "Machine Learning" },
      { name: "Speech Recognition" },
      { name: "Pandas" },
      { name: "NumPy" },
    ],
    image: "/assets/projects/thumb3.jpg",
    github: "https://github.com/ujwalreddybattu04/Spam-Email-Prediction-",
  },
  {
    num: "04",
    category: "deep learning",
    title: "AI-Based Disease Diagnostic",
    description:
      "An AI system leveraging Convolutional Neural Networks to automate the diagnosis of kidney diseases from CT scan images, classifying them into normal and diseased categories to assist radiologists with fast and accurate assessments.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "OpenCV" },
      { name: "Jupyter Notebook" },
    ],
    image: "/assets/projects/thumb4.jpg",
    github:
      "https://github.com/ujwalreddybattu04/AI-Based-Disease-Diagnostic-",
  },
  {
    num: "05",
    category: "machine learning",
    title: "5G Data Usage Prediction App",
    description:
      "An AI-powered web application that predicts mobile data usage based on user behavior, network conditions, and device types, utilizing an XGBoost model for accurate predictions and featuring an interactive Streamlit interface.",
    stack: [
      { name: "Python" },
      { name: "XGBoost" },
      { name: "Streamlit" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
    ],
    image: "/assets/projects/thumb5.jpg",
    github: "https://github.com/ujwalreddybattu04/5G-Data-Predictor-Xgboost",
  },
  {
    num: "06",
    category: "deep learning",
    title: "Automatic 3D Cartoon Generation from Natural Language Stories",
    description:
      "A deep learning system that automatically generates 3D animated cartoon videos from natural language stories, converting text into animated scenes with characters, dialogues, and motions.",
    stack: [
      { name: "Python" },
      { name: "Natural Language Processing (NLP)" },
      { name: "Computer Vision" },
      { name: "3D Animation" },
      { name: "Deep Learning" },
    ],
    image: "/assets/projects/thumb6.jpg",
    github:
      "https://github.com/ujwalreddybattu04/Automatic-creation-of-a-3D-cartoon-from-natural-language-story",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-black/90 text-white p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm mt-1 text-white/80 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <ul className="flex flex-wrap gap-x-2 gap-y-1 text-xs mt-2">
                    {project.stack.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-accent font-medium">
                        {item.name}
                        {index < 2 && ","}
                      </li>
                    ))}
                    {project.stack.length > 3 && (
                      <li className="text-accent/60 font-medium">
                        +{project.stack.length - 3} more
                      </li>
                    )}
                  </ul>

                  {/* GitHub Button */}
                  <div className="mt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500">
                        <BsGithub className="text-xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
