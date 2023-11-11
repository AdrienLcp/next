import { useState } from 'react'
import Image from 'next/image'

import type { IImagesSliderProps } from './ImagesSliderTypes'
import styles from './ImagesSliderStyles.module.sass'

import { ArrowIcon, DotIcon } from '@/icons'
import { Button, Skip } from '@/components'
import { useLocale } from '@/hooks'
import { classNames } from '@/utils'

export const ImagesSlider: React.FC<IImagesSliderProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const { getString } = useLocale()

  const handleShowPreviousImage = () => {
    setSelectedImageIndex(index => index === images.length - 1 ? 0 : index + 1)
  }

  const handleShowNextImage = () => {
    setSelectedImageIndex(index => index === 0 ? images.length - 1 : index - 1)
  }

  return (
    <section className={styles.container} aria-label={getString('components.imagesSlider.ariaLabel')}>
      <Skip id='after-images-slider-controls' label={getString('components.imagesSlider.skipLabel')}>
        <div className={styles.wrapper}>
          {images.map((image, index) => (
            <Image
              key={image.url}
              src={image.url}
              alt={image.alt || getString('components.imagesSlider.defaultImageAlt')}
              className={styles.image}
              style={{ transform: `translateX(${-100 * selectedImageIndex}%)` }}
              aria-hidden={index !== selectedImageIndex}
            />
          ))}        
        </div>

        <Button
          icon={<ArrowIcon orientation='left' size={'2rem'} />}
          className={classNames(styles.button, styles.left)}
          aria-label={getString('components.imagesSlider.previousLabel')}
          onClick={handleShowPreviousImage}
        />
        
        <Button
          icon={<ArrowIcon orientation='right' size={'2rem'} />}
          className={`*${styles.button} ${styles.right}`}
          aria-label={getString('components.imagesSlider.nextLabel')}
          onClick={handleShowNextImage}
        />

        <div className={styles.dots}>
          {images.map((image, index) => (
            <Button
              key={image.url}
              onClick={() => setSelectedImageIndex(index)}
              icon={<DotIcon size='1rem' isFilled={index === selectedImageIndex} />}
              aria-label={`${getString('components.imagesSlider.viewImage')} ${image.alt || index + 1}`}
              className={styles.dot}
            />
          ))}
        </div>
      </Skip>
    </section>
  )
}
