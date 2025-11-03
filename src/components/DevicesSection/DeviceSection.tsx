import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import styles from "./DevicesSection.module.scss"

import karcherK7 from "../../assets/KarcherK7.png"
import boschVac15 from "../../assets/BoschVac15.png"
import karcherBR40 from "../../assets/KarcherBR.png"
import boschFontus from "../../assets/BoschFontus18V.png"

const devices = [
  { img: karcherK7, name: "Karcher K 7", desc: "Hochdruckreiniger" },
  { img: boschVac15, name: "Bosch Vac 15", desc: "Hochdruckreiniger" },
  { img: karcherBR40, name: "Karcher BR 40/10C", desc: "Handkehrmaschine" },
  { img: boschFontus, name: "Bosch Fontus 18V", desc: "Reinigungsgerät für Außenbereich" },
  { img: boschFontus, name: "Bosch Fontus 18V", desc: "Reinigungsgerät für Außenbereich" },
  { img: boschFontus, name: "Bosch Fontus 18V", desc: "Reinigungsgerät für Außenbereich" },
]

function DevicesSection() {
  return (
    <section className={styles.devices}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h4 className={styles.subtitle}>UNSERE GERÄTE</h4>
          <h2 className={styles.title}>Unsere Professionelle Reinigungsausrüstung</h2>
          <button className={styles.moreBtn}>Weitere Geräte</button>
        </div>

        {/* Карусель */}
        <div className={styles.sliderWrapper}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3.6}
            grabCursor={true}
            loop={false}
            className={styles.slider}
            breakpoints={{
              320: { slidesPerView: 2.2, spaceBetween: 5 },
              480: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 25 },
              1024: { slidesPerView: 3.5, spaceBetween: 30 },
              1280: { slidesPerView: 3.5, spaceBetween: 35 },
              1600: { slidesPerView: 3.6, spaceBetween: 40 },
            }}
          >
            {devices.map((device, index) => (
              <SwiperSlide key={index}>
                <div className={styles.item}>
                  <div className={styles.device}>
                    <div className={styles.imageBox}>
                      <img src={device.img} alt={device.name} />
                    </div>
                  </div>
                  <h3 className={styles.name}>{device.name}</h3>
                  <p className={styles.desc}>{device.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Сітка для мобільних */}
        <div className={styles.gridWrapper}>
          {devices.map((device, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.device}>
                <div className={styles.imageBox}>
                  <img src={device.img} alt={device.name} />
                </div>
              </div>
              {/* <h3 className={styles.name}>{device.name}</h3>
              <p className={styles.desc}>{device.desc}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevicesSection
