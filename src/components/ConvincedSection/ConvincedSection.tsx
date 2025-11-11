import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ConvincedSection.module.scss";

import vorherImg1 from "../../assets/BeforeAfrerCollection/Vorher.png";
import nacherImg1 from "../../assets/BeforeAfrerCollection/Nacher.png";
import vorherImg2 from "../../assets/BeforeAfrerCollection/Vorher2.jpg";
import nacherImg2 from "../../assets/BeforeAfrerCollection/Nachher2.jpg";
import vorherImg3 from "../../assets/BeforeAfrerCollection/Vorher3.jpg";
import nacherImg3 from "../../assets/BeforeAfrerCollection/Nachher3.jpg";
import vorherImg4 from "../../assets/BeforeAfrerCollection/Vorher4.jpg";
import nacherImg4 from "../../assets/BeforeAfrerCollection/Nachher4.jpg";
import vorherImg5 from "../../assets/BeforeAfrerCollection/Vorher5.jpg";
import nacherImg5 from "../../assets/BeforeAfrerCollection/Nachher5.jpg";
import vorherImg6 from "../../assets/BeforeAfrerCollection/Vorher6.jpg";
import nacherImg6 from "../../assets/BeforeAfrerCollection/Nachher6.jpg";
import vorherImg7 from "../../assets/BeforeAfrerCollection/Vorher7.jpg";
import nacherImg7 from "../../assets/BeforeAfrerCollection/Nachher7.jpg";
import vorherImg8 from "../../assets/BeforeAfrerCollection/Vorher8.jpg";
import nacherImg8 from "../../assets/BeforeAfrerCollection/Nachher8.jpg";


interface BeforeAfter {
  before: string;
  after: string;
}

const ConvincedSection = () => {
  const [slides, setSlides] = useState<BeforeAfter[]>([
    { before: vorherImg1, after: nacherImg1 },
    { before: vorherImg2, after: nacherImg2 },
    { before: vorherImg3, after: nacherImg3 },
    { before: vorherImg4, after: nacherImg4 },
    { before: vorherImg5, after: nacherImg5 },
    { before: vorherImg6, after: nacherImg6 },
    { before: vorherImg7, after: nacherImg7 },
    { before: vorherImg8, after: nacherImg8 },
  ]);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  // const loadMore = () => {
  //   const newSlides = Array(2)
  //     .fill(null)
  //     .map(() => ({ before: vorherImg, after: nacherImg }));
  //   setSlides((prev) => [...prev, ...newSlides]);
  // };

  // Коли інстанс Swiper та кнопки вже в DOM — підключаємо навігацію
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (!prevRef.current || !nextRef.current) return;

    // Прив'язуємо елементи навігації і (пере)ініціалізуємо навігацію
    // @ts-ignore
    swiper.params.navigation = swiper.params.navigation || {};
    // @ts-ignore
    swiper.params.navigation.prevEl = prevRef.current;
    // @ts-ignore
    swiper.params.navigation.nextEl = nextRef.current;

    if (swiper.navigation) {
      try {
        swiper.navigation.destroy(); // безпечніше заново ініціалізувати
      } catch (e) {
        /* ignore */
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef.current, prevRef.current, nextRef.current]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.textBlock}>
          <p className={styles.subtitle}>
            Kunden lieben unsere zuverlässige <br />
            Reinigung, sichtbar wirksam
          </p>
          <h2>Überzeugt?</h2>
        </div>
        <div className={styles.badge}>500+ zufriedene Kunden</div>
      </div>

      <div className={styles.sliderContainer}>
        {/* prev button перед слайдером */}
        <button
          ref={prevRef}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="prev"
        >
          <ChevronLeft />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: ".customPagination",
          }}
          // зберігаємо інстанс
          onSwiper={(sw) => {
            swiperRef.current = sw;
          }}
          className={styles.swiper}
        >
          {slides.map((pair, i) => (
            <SwiperSlide key={i}>
              <div className={styles.imagePair}>
                <figure className={styles.imageCard}>
                  <figcaption className={styles.label}>Vorher</figcaption>
                  <img src={pair.before} alt={`Vorher ${i + 1}`} draggable={false} />
                </figure>

                <figure className={styles.imageCard}>
                  <figcaption className={styles.label}>Nachher</figcaption>
                  <img src={pair.after} alt={`Nachher ${i + 1}`} draggable={false} />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="customPagination" />

        {/* next button після слайдеру */}
        <button
          ref={nextRef}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="next"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ConvincedSection;
