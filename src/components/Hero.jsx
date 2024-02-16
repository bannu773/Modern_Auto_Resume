import { motion } from "framer-motion";
import { slideIn } from "../components/Extrathings/utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <motion.div variants={slideIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="">
      <section className={`relative w-full h-screen mx-auto `}>
        <div className="absolute w-[85%] h-[25%] inset-9 gradient-01" />
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          style={{ zIndex: 10 , pointerEvents:"none" }}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Auto <span className="text-[#915EFF]">RESUME</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Ease Making Resumes <br className="sm:block hidden" />
              got your Dream True
            </p>
          </div>
        </div>

        {/* <ComputersCanvas /> */}
        <EarthCanvas  />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
