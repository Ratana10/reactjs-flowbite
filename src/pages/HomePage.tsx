import React from "react";
import Hero from "../components/Hero";
import PopularCourse from "../components/PopularCourse";
import CourseCategory from "../components/CourseCategory";
import SocialMedia from "../components/SocialMedia";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PopularCourse />
      <CourseCategory />
      <SocialMedia />
    </div>
  );
};

export default HomePage;
