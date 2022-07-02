# Chakra RichTextEditor

A Chakra component for visual editing that uses TipTap under the hood.

## installation

First, install Chakra UI

```sh
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Then, install Chakra RTE library

```sh
npm i @viteloop/chakra-rte
```

## Usage

Don't forget to have Chakra Provider settled in your root file

```ts
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

Then use Chakra RTE as react component :

```ts
import {RichTextEditor, RichTextReader, JSONContent} from '@viteloop/chakra-rte'

function App() {
  const [content, setContent] = useState<JSONContent>(initialContent)
  const [editMode, setEditMode] = useState(true);

  return (
    <div className="App">

      //... some content of your App

      {editMode ?
        <RichTextEditor content={content} onSave={(content) => {setContent(content)}) }}/>
        : <RichTextReader content={content} />
      }
    </div>
  )
}

```
