import HarryPotter from './components/HarryPotter'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import type { Character } from './interfaces/Character'

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px solid #ff69b4;
  background-color: #ffe4f1;
  border-radius: 12px;
`;

// App component that fetches a list of Harry Potter characters from the API and displays them using the HarryPotter component.
function App() {
  const [data, setData] = useState<Character[]>([]);

    useEffect(() => {
      async function fetchData(): Promise<void> {
          const rawData = await fetch("https://potterapi-fedeperin.vercel.app/en/characters");
          const characters: Character[] = await rawData.json();
          setData(characters);
      }
      fetchData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <HarryPotter data={data}/>
        </ParentDiv>
    )
}

export default App
