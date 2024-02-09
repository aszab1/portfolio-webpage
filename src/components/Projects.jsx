import { Box, Heading, Text, Image, Card, Stack, CardBody} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import travelistik1 from '../assets/images/travelistik1.png'
import travelistik2 from '../assets/images/travelistik2.png'
import travelistik3 from '../assets/images/travelistik3.png'
import travelistik4 from '../assets/images/travelistik4.png'
import legends1 from '../assets/images/legends1.png'
import legends2 from '../assets/images/legends2.png'
import legends3 from '../assets/images/legends3.png'
import legends4 from '../assets/images/legends4.png'
import galaxy1 from '../assets/images/galaxy1.png'
import galaxy2 from '../assets/images/galaxy2.png'
import snake from '../assets/images/snake.png'




export default function Projects(){
  const MotionImage = motion(Image)

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.25 })

  console.log("In View:", inView1)

  return (
    <>
    <div>
      <h1>Projects</h1>
      <p>The following projects were key deliverables from the General Assembly Software Engineer Bootcamp, a twelve-week intensive course preparing students for tech careers.</p>
    </div>

  <div className='p4-div' ref={ref4}>
      <Card className='p4-card'
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        <Stack>
          <CardBody className='project4'>
            <Heading className='heading-p4' size='md'>Travelistik</Heading>
            <p className='p-p4'>Solo Project | 10 days</p>
            <Text className='p4-text'>This full-stack web application allows users to view, like and review travel inspirations, showcasing primarily my photos from various destinations. Additionally, users can contribute by adding their own recommendations to the existing travel inspirations list. I managed the entire technology stack, using Python/Django for backend API and React for frontend.</Text>
          </CardBody>
        </Stack>
        <Box width={{ base: '100%', sm: '50%' }}>
        <AnimatePresence>
            {inView4 && (
              <>
          <MotionImage 
            src={travelistik1} 
            className='travelistik-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={travelistik2}
            className='travelistik-img'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={travelistik4} 
            className='travelistik-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={travelistik3}
            className='travelistik-img'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          </>
            )}
            </AnimatePresence>
        </Box>
      </Card>
    </div>
    <div className='p3-div' ref={ref3}>
      <Card className='p3-card'
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        <Box width={{ base: '100%', sm: '50%' }}>
        <AnimatePresence>
            {inView3 && (
              <>
          <MotionImage 
            src={legends1} 
            className='legends-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={legends2}
            className='legends-img'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={legends3} 
            className='legends-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={legends4}
            className='legends-img'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          </>
            )}
            </AnimatePresence>
        </Box>
        <Stack>
          <CardBody className='project3'>
            <Heading className='heading-p3' size='md'>Legends of the Turf</Heading>
            <p className='p-p4'>Group Project | 9 days</p>
            <Text className='p4-text'>Inspired by the Premier League Fantasy Football platform, this full-stack web application enables users to create, edit, and delete fantasy football teams, as well as select players. It was developed collaboratively by a team of three using the MERN stack.</Text>
          </CardBody>
        </Stack>
      </Card>
    </div>
    <div className='p2-div'>
      <Card className='p2-card'
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        <Stack>
          <CardBody className='project2' ref={ref2}>
            <Heading className='heading-p2' size='md'>GalacticScope</Heading>
            <p className='p-p4'>Paired Project | 2 days</p>
            <Text className='p4-text'>A React image gallery app that displays NASA astronomy images, developed in a 48-hour pair-coding hackathon.</Text>
          </CardBody>
        </Stack>
        <Box width={{ base: '100%', sm: '50%' }}>
        <AnimatePresence>
            {inView2 && (
              <>
          <MotionImage 
            src={galaxy1} 
            className='galaxy-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={galaxy2}
            className='galaxy-img'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          </>
            )}
            </AnimatePresence>
        </Box>
      </Card>
    </div>
    <div className='p1-div' ref={ref1}>
      <Card className='p1-card'
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        
        <Box width={{ base: '100%', sm: '50%' }}>
        <AnimatePresence>
            {inView1 && (
              <>
          <MotionImage 
            src={snake} 
            className='snake-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          </>
            )}
          </AnimatePresence>
          
        </Box>
        <Stack>
          <CardBody className='project1'>
            <Heading className='heading-p1' size='md'>Forest Snake</Heading>
            <p className='p-p4'>Solo Project | 7 days</p>
            <Text className='p4-text'>A grid-based snake game with HTML, CSS and Vanilla JavaScript. Planned and built game functionality from scratch in one week.</Text>
          </CardBody>
        </Stack>
      </Card>
    </div>
</>
  )
}