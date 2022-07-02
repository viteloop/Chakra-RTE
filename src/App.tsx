import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Switch,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaGithub} from 'react-icons/fa'
import { useState } from 'react'
import {RichTextEditor, RichTextReader, JSONContent} from '../lib'
import initialContent from './InitialContent.json'

function App() {
  const [content, setContent] = useState<JSONContent>(initialContent)
  const { colorMode, toggleColorMode } = useColorMode();
  const [editMode, setEditMode] = useState(true);
  const toast = useToast()

  return (
    <div className="App">
      <header className="App-header">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box style={{whiteSpace: 'nowrap'}} fontWeight='semibold' fontSize="lg">Chakra RichTextEditor</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              <FormControl display='flex' alignItems='center' marginLeft={4}>
                <FormLabel htmlFor='edit-mode' mb='0'>
                  Edit mode
                </FormLabel>
                <Switch id='edit-mode' isChecked={editMode} onChange={(e) => setEditMode(e.target.checked)} />
              </FormControl>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Center>
                <Link href='https://github.com/viteloop/Chakra-RTE' isExternal> 
                  <FaGithub />
                </Link>
              </Center>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </header>
      <Flex 
        my={20} 
        flexDirection={'column'} 
        justifyContent='center' 
        alignItems={'center'}
        >
          {editMode ? 
        <RichTextEditor content={content} onSave={(content) => {setContent(content);  toast({
          title: 'Content saved.',
          description: "We've saved the editor content for you.",
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: true,
        }) }}/>
        : <RichTextReader content={content} />
          }
      </Flex>
    </div>
  )
}

export default App
