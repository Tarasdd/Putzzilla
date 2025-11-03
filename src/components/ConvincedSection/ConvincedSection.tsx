import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ConvincedSection.module.scss";

import vorherImg from "../../assets/Vorher.png";
import nacherImg from "../../assets/Nacher.png";

interface BeforeAfter {
  before: string;
  after: string;
}

const ConvincedSection = () => {
  const [slides, setSlides] = useState<BeforeAfter[]>([
    { before: vorherImg, after: nacherImg },
    { before: vorherImg, after: nacherImg },
    { before: vorherImg, after: nacherImg },
  ]);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  const loadMore = () => {
    const newSlides = Array(2)
      .fill(null)
      .map(() => ({ before: vorherImg, after: nacherImg }));
    setSlides((prev) => [...prev, ...newSlides]);
  };

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
