
import { Box, Heading, Text, Image, Card, Stack, CardBody } from '@chakra-ui/react'
import adrienn from '../assets/images/adrienn.jpg'

export default function Home() {

  return (
    <div className='home-div'>
      <Card className='home-card'
      direction={{ base: 'column', lg: 'row' }}
      overflow='hidden'
      variant='outline'>
        <Box width={{ base: '100%', sm: '50%' }}>
          <Image className='home-img' src={adrienn} alt={`A picture of Adrienn Szabo`}></Image>
        </Box>
        <Stack>
        <CardBody className='home-cardBody'>
        <Heading className='heading-text' size='md'>Hello!</Heading>
        <Text className='home-text'>I am Adrienn, a Junior Software Engineer based in London.</Text>
        </CardBody>
        </Stack>
      </Card>
    </div>
  )
}