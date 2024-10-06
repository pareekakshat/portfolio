import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="Master of Science in Computer Science (MSCS)"
            subTitle="University of California Santa Cruz"
            result="4.0"
            des="Currently enrolled for Analysis of Algorithms and Storage Systems courses."
          /> */}
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="SRM Institute of Science and Technology (2019 - 2023)"
            result="9.10 / 10 CGPA"
            des="Studied core Computer Science subjects such as Data Structures, Algorithms, Computer Networks, Databases, Operating System, etc."
          />
          <ResumeCard
            title="High Schooling"
            subTitle="Star Public School, Kota"
            result="7 CGPA"
            des="Studied subjects such as Mathematics, Physics, and Chemistry."
          />
          <ResumeCard
            title="Secondary Schooling"
            subTitle="D.A.V. Public School, Kota"
            result="8 CGPA"
            des="Studied subjects such as Computer Science, Mathematics, Physics, and Chemistry."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Geodata Processing using Python"
            subTitle="Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO) - (Feb. 2023)"
            result="Online"
            des="Learned about Geocomputation · Python (Programming Language) · Geodatabase · Geographic Information Systems (GIS)"
            link="https://drive.google.com/file/d/1mFlVs8LTanLqAi21wvg7U74VdxGRauxx/view?usp=sharing"
          />
          <ResumeCard
            title="DevOps Foundations: DevSecOps"
            subTitle="LinkedIn - (Dec. 2022)"
            result="Online"
            des="Completed DevOps Foundations: DevSecOps, gaining essential skills in integrating security into DevOps practices."
            link="https://drive.google.com/file/d/1vRjHZD-8_BMX5SKDO1vofXbUBJvbNntn/view"
          />
          <ResumeCard
            title="Machine Learning & Data Science A-Z: Hands-on Python 2022"
            subTitle="Udemy - (Jan. 2022)"
            result="Online"
            des="Completed Machine Learning · Python (Programming Language) · Data Science"
            link="https://www.udemy.com/certificate/UC-9b4751ca-201a-43b1-9568-4dcaee2c6bc3/"
          />
          <ResumeCard
            title="Basics of Geocomputation and Geoweb Services"
            subTitle="Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO) - (Oct 2021)"
            result="Online"
            des=" Learned about Geocomputation · Geo web Services · Geographic Information Systems (GIS)"
            link="https://drive.google.com/file/d/17cuvQUIP3Bv4EBWmuHwVaQDXZkkBfZWT/view"
          />
          <ResumeCard
            title="Introduction to Data Science in Python"
            subTitle="University of Michigan | Coursera - (July. 2021)"
            result="Online"
            des=" Learned about Data Cleaning · NumPy · Python (Programming Language) · Pandas (Software) · Data Science"
            link="https://www.coursera.org/account/accomplishments/certificate/WU7M7499QRDS"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
