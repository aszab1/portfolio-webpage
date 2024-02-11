import { Box, Heading, Text, Image, Card, Stack, CardBody} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from 'react-intersection-observer'
import travelistik1 from '../assets/images/travelistik1.png'
import travelistik2 from '../assets/images/travelistik2.png'
import legends1 from '../assets/images/legends1.png'
import legends2 from '../assets/images/legends2.png'
import galaxy1 from '../assets/images/galaxy1.png'
import galaxy2 from '../assets/images/galaxy2.png'
import snake from '../assets/images/snake.png'

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Tooltip } from '@chakra-ui/react'



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
      <h1 className='project-text'>Projects</h1>
      <p>The following projects were key deliverables from the General Assembly Software Engineer Bootcamp, <br/>a twelve-week intensive course preparing students for tech careers.</p>
    </div>

  
      <Card className='p4-card'
            ref={ref4}
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        <Stack className='p4-stack'>
          <CardBody className='project4'>
            <Heading className='heading-p4' size='md'>Travelistik</Heading>
            <p className='p-p4'>Solo Project | 10 days</p>
            <Tooltip className='skills-tooltip' label='HTML' placement='top'>
            <svg className='html' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Html"><path d="M20.387,21.203L22.25,0H1.751H1.75l1.863,21.203L11.973,24L20.387,21.203z M6.702,17.448l-0.32-4.061h2.546l0.187,2.041l2.856,0.777l2.866-0.777l0.32-3.333H6.248l-0.683-7.8h12.871l-0.235,2.555H8.391l0.219,2.647h9.374l-0.727,7.95l-5.226,1.447v0.016h-0.059L6.702,17.448z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
            </Tooltip>
            <Tooltip className='skills-tooltip' label='CSS' placement='end'>
            <svg className='css' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Css"><path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.274 4.709-.161 1.809-.485 5.424L8 12.944l-.002.001-3.625-1.004-.254-2.836h1.776l.132 1.472 1.971.532.002-.002 1.973-.532.269-2.451-6.208.017-.176-1.677 6.533-.076.132-1.795-6.84.019-.115-1.668h8.864l-.158 1.765z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
            </Tooltip>
            <Text className='p4-text'>This full-stack web application allows users to view, like and review travel inspirations, showcasing primarily my photos from various destinations. Additionally, users can contribute by adding their own recommendations to the existing travel inspirations list. I managed the entire technology stack, using Python/Django for backend API and React for frontend.</Text>
            <Tooltip className='project-tooltip' label='View Project'>
            <FontAwesomeIcon icon={faUpRightFromSquare} className='fa-xl' onClick={() => window.open('https://travelistik-9cac9bf0df28.herokuapp.com/')} />
            </Tooltip>
            <Tooltip className='project-tooltip' label='Github'>
            <FontAwesomeIcon icon={faGithub} className='fa-xl' onClick={() => window.open('https://github.com/aszab1/travelistik')}/>
            </Tooltip>
          </CardBody>
        </Stack>
        <Box className='image-box' width={{ base: '100%', sm: '50%' }}>
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
          </>
            )}
            </AnimatePresence>
        </Box>
      </Card> 

      <Card className='p3-card'
            ref={ref3}
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        <Box width={{ base: '100%', sm: '50%' }}>
        <AnimatePresence>
            {inView3 && (
              <>
          <MotionImage 
            src={legends2} 
            className='legends-img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          />
          <MotionImage 
            src={legends1}
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
            <FontAwesomeIcon icon={faUpRightFromSquare} className='fa-xl' onClick={() => window.open('https://legendsofhteturf-ee3b38ecb79b.herokuapp.com/')}/>
            <FontAwesomeIcon icon={faGithub} className='fa-xl' onClick={() => window.open('https://github.com/aszab1/legends-of-the-turf')}/>
          </CardBody>
        </Stack>
      </Card>
    
    
      <Card className='p2-card'
            ref={ref2}
            direction={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'>
        <Stack>
          <CardBody className='project2' >
            <Heading className='heading-p2' size='md'>GalacticScope</Heading>
            <p className='p-p4'>Paired Project | 2 days</p>
            <Text className='p4-text'>A React image gallery app that displays NASA astronomy images, developed in a 48-hour pair-coding hackathon.</Text>
            <FontAwesomeIcon icon={faUpRightFromSquare} className='fa-xl' onClick={() => window.open('https://galacticscope.netlify.app/')}/>
            <FontAwesomeIcon icon={faGithub} className='fa-xl' onClick={() => window.open('https://github.com/aszab1/galactiScope')}/>
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
    
    
      <Card className='p1-card'
            ref={ref1}
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
            <Tooltip className='skills-tooltip' label='JavaScript' placement='start'>
            <svg className='js' title="JavaScript"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Js"><path fill="#a89d9d" d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z" className="color444444 svgShape"></path></svg>
            </Tooltip>
            <Tooltip className='skills-tooltip' label='HTML' placement='top'>
            <svg className='html' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Html"><path d="M20.387,21.203L22.25,0H1.751H1.75l1.863,21.203L11.973,24L20.387,21.203z M6.702,17.448l-0.32-4.061h2.546l0.187,2.041l2.856,0.777l2.866-0.777l0.32-3.333H6.248l-0.683-7.8h12.871l-0.235,2.555H8.391l0.219,2.647h9.374l-0.727,7.95l-5.226,1.447v0.016h-0.059L6.702,17.448z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
            </Tooltip>
            <Tooltip className='skills-tooltip' label='CSS' placement='end'>
            <svg className='css' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Css"><path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.274 4.709-.161 1.809-.485 5.424L8 12.944l-.002.001-3.625-1.004-.254-2.836h1.776l.132 1.472 1.971.532.002-.002 1.973-.532.269-2.451-6.208.017-.176-1.677 6.533-.076.132-1.795-6.84.019-.115-1.668h8.864l-.158 1.765z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
            </Tooltip>
            <Tooltip className='project-tooltip' label='View Project'>
            <FontAwesomeIcon icon={faUpRightFromSquare} className='fa-xl' onClick={() => window.open('https://aszab1.github.io/Snake/')} />
            </Tooltip>
            <Tooltip className='project-tooltip' label='Github'>
            <FontAwesomeIcon icon={faGithub} className='fa-xl' onClick={() => window.open('https://github.com/aszab1/Snake')}/>
            </Tooltip>
          </CardBody>
        </Stack>
      </Card>
    
</>
  )
}