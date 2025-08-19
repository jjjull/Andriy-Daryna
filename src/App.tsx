import { useState, useEffect, useRef } from "react";
import TypingText from "./TypingText";
import img1 from "./img.jpg";
import WeddingInvitation from "./Wedding Invitation.jpg";
import { motion } from "framer-motion";
import WeddingTimeline from "./WeddingTimeline";
import WeddingLocation from "./WeddingLocation";
import DressCode from "./DressCode";
import Confirmation from "./Confirmation";
import FooterBg from "./heart.jpg";


interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  const [isTypingActive, setIsTypingActive] = useState(false);
  const guestsRef = useRef<HTMLDivElement | null>(null);

  // Лічильник часу
  useEffect(() => {
    const weddingDate = new Date("2025-10-11T14:00:00");
    setIsVisible(true);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Відслідковування появи блоку "Дорогі наші гості"
  useEffect(() => {
    if (!guestsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTypingActive(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(guestsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img1})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-black bg-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {isVisible && (
          <motion.div
            className="relative z-10 text-center text-white px-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="mb-8 mt-12">
              <h1 className="text-4xl md:text-7xl font-light mb-6 tracking-wider">
                Андрій
              </h1>
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-px bg-white opacity-70"></div>
                <span className="mx-7 text-xl font-light">та</span>
                <div className="w-20 h-px bg-white opacity-70"></div>
              </div>
              <h1 className="text-4xl md:text-7xl font-light tracking-wider">
                Дарина
              </h1>
            </div>

            <div className="flex items-center justify-center mb-4">
              <div className="text-xl font-light">
                <span>жовтня</span>
              </div>
              <div className="mx-8 text-4xl font-thin font-[Montserrat]">
                11
              </div>
              <div className="text-xl font-light">
                <span>2025</span>
              </div>
            </div>

            <motion.div
              className="rounded-lg p-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              <p className="text-lg font-light mb-8 tracking-wide">
                До весілля залишилось
              </p>
              <div className="grid grid-cols-4 gap-4 text-center">
                {["Днів", "Годин", "Хвилин", "Секунд"].map((label, i) => (
                  <motion.div
                    key={label}
                    className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + i * 0.2, duration: 0.6 }}
                  >
                    <div className="text-2xl font-light">
                      {
                        [
                          timeLeft.days.toString().padStart(3, "0"),
                          timeLeft.hours.toString().padStart(2, "0"),
                          timeLeft.minutes.toString().padStart(2, "0"),
                          timeLeft.seconds.toString().padStart(2, "0"),
                        ][i]
                      }
                    </div>
                    <div className="text-xs font-light mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Guests Section */}
      <section
        className="w-full bg-white flex flex-col   justify-center items-center py-6 relative"
        ref={guestsRef}
      >
        <TypingText
          text="ДОРОГІ НАШІ ГОСТІ!"
          speed={120}
          isActive={isTypingActive}
          className="absolute top-[60px] left-1/2 -translate-x-1/2  "
        />
        <motion.img
          src={WeddingInvitation}
          alt="Wedding invitation"
          className="w-full max-w-4xl object-contain -mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>

      {/* Wedding Details */}
      <WeddingTimeline />
      <DressCode />
      <Confirmation />
      <WeddingLocation />

      {/* Animal Section */}
      <section className="relative bg-white pb-12 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-light mb-4">Дарунок для нас — турбота про них</h3>
        <p className="text-lg font-light leading-relaxed">
          Квіти пахнуть гарно, а корм — ще краще!
          <br />
          Мяу-мяу, гав-гав просять замість букетів принести
          <span className="font-semibold"> смаколики для лапатих друзів</span>,
          які цього потребують.
        </p>
        <p className="mt-4 text-base font-light">
          Пухнастики скажуть дякую, і ми також 
        </p>

      </section>
      
      {/* Footer */}
      <footer
        className="text-white py-12 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-5">
            <span className="text-2xl font-light mt-1">Андрій & Дарина</span>
          </div>
          <p className="font-light">11 жовтня 2025</p>
          <p className="text-sm ">
            Дякуємо, що поділите з нами цей особливий день!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
