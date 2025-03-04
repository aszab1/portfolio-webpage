import { Card, Heading, CardBody, CardFooter, Stack, Text, Tooltip } from '@chakra-ui/react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useMemo, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import MobileAnimation from './MobileAnimation'
import Projects from './Projects'

import poseidon from '../assets/images/poseidon.png'
import mousecastle1 from '../assets/images/mousecastle1.jpeg'
import mousecastle2 from '../assets/images/mousecastle2.jpeg'

export default function Work() {

  const mobileControls = useAnimation()
  const poseidonRef = useRef(null)
  const poseidonInView = useInView(poseidonRef, {once: true})

  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = useMemo(() => [ mousecastle1, mousecastle2], [])

  // trigger MobileAnimation after poseidon img animation completes
  const handlePoseidonComplete = () => {
    mobileControls.start({
      opacity: 1,
      x: 0,  // slightly to the right of the Poseidon img
      transition: { duration: 1, ease: 'easeInOut' }
    })
  }

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])


  return (
    <>
    <div id="work"></div>
      <div>
        <h2 className="work-text">Work</h2>
        </div>
      <Card
        className='poseidon-card'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Stack className='poseidon-stack'>
          <CardBody>
            <Heading className='work-heading' size='md'>Client: Poseidon Úszásoktatás</Heading>

            <Text className='work-text' py='2'>
              A React app built in JavaScript featuring custom animations powered by Framer Motion. The client-provided logo transitions into an introduction, with backgrounds custom-designed using SVGs. It also includes integration with a cloud-based service for storing and managing user reviews, and is available in both Hungarian and English, controlled by a language switch.
            </Text>
          </CardBody>

          <CardFooter className='work-footer'>
            <Tooltip label="View Project">
              <FontAwesomeIcon className="work-away-page" icon={faUpRightFromSquare} onClick={() => window.open('https://poseidonuszasoktatas.com/')} />
            </Tooltip>
            <Tooltip label="Github">
              <FontAwesomeIcon className="work-project-gh" icon={faGithub} onClick={() => window.open('https://github.com/aszab1/peter-jarfas-website')} />
            </Tooltip>
          </CardFooter>
        </Stack>
        <div className="poseidon-mobile-container">
          <motion.img
            ref={poseidonRef}
            className='poseidon'
            src={poseidon}
            alt='Poseidon Uszasoktatas webpage'
            onLoad={() => setIsLoaded(true)}
            initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
            animate={
              isLoaded && poseidonInView
                ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' }
                : {}
            }
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            onAnimationComplete={handlePoseidonComplete}

          />
          <motion.div
            className="mobile-animation"
            initial={{ opacity: 0, x: 100 }}
            animate={mobileControls}
          >
            <MobileAnimation />
          </motion.div>
        </div>
      </Card>
<div style={{ width: "90%", height: "1px", backgroundColor: "#6D2E46", margin: "0 auto"}}></div>
      <Card
        className='work-card'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Stack className='work-stack'>
          <CardBody>
            <Heading className='work-heading' size='md'>Client: Royal Palace of Gödöllő</Heading>

            <Text className='work-text' py='2'>
              A React app built in collaboration with two software engineers, created for children visiting the museum. The app guides them through a series of questions, which they must answer to solve the password. It is available in three languages—Hungarian, English, and German.
            </Text>
          </CardBody>

          <CardFooter className='work-footer'>
            <Tooltip label="View Project">
              <FontAwesomeIcon className="work-away-page" icon={faUpRightFromSquare} onClick={() => window.open('https://mousecastle.vercel.app/')} />
            </Tooltip>
            <Tooltip label="Github">
              <FontAwesomeIcon className="work-project-gh" icon={faGithub} onClick={() => window.open('https://github.com/aszab1/mousecastle')} />
            </Tooltip>
          </CardFooter>
        </Stack>
        <div className="mousecastle-container">
          
          <AnimatePresence mode='wait'>
            {isLoaded && (
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{ position: 'relative', width: '100%', height: '100%' }}

              >
                <img
                className="project-img"
                  src={images[currentImageIndex]}
                  alt={`Godollo Museum App - ${currentImageIndex}`}
                  onLoad={handleImageLoad}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    margin: '0'
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          </div>
      </Card>
      < Projects />
    </>

  )
}