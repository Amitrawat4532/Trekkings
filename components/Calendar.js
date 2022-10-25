import { Flex , Box } from '@chakra-ui/react'
import React , { useState} from 'react'
import Calendar from 'react-calendar'
import moment  from 'moment'

const CalendarComp = () => {

    const [value, onChange] = useState(new Date());
    const mark = [
        '04-10-2022',
        '15-10-2022',
        '05-11-2022'
    ]

  return (
    <>
    
        <Flex bg='white' w='100vw' h='100vh' justifyContent='center' alignItems='center' p='10' gap='4'>
            <Flex border='1px solid green' flex='1' height='500px' width='100%' p='4'>
            <Calendar onChange={onChange} value={value} className='calendar' 
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("DD-MM-YYYY"))){
                 return  'highlight'
                }
              }}
            />
                
            </Flex>
            <Box border='1px solid green' flex='1' height='500px'>
                Calendar Events
            </Box>
        </Flex>
    
    </>
  )
}

export default CalendarComp