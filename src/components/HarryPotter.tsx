import styled from "styled-components";
import type { Character } from "../interfaces/Character"

// styling for all the characters
const AllCharsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #ffc0cb;
  //add spacing
  gap: 2vw;
  padding: 2vw;
  border-radius: 10px;
`;

// styling for single character cube
const SingleCharDiv = styled.div<{ status: string }>`
  flex: 1 1 calc(25% - 2px);
  min-width: 250px;
  max-width: 300px;
  border-radius: 10px;
  border: 3px solid #ff69b4;
  background-color: lightpink;
  color: darkred;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5vh;
  text-align: center;

  h1, h2 {
    font-size: 2vh;
    margin-bottom: 0.5vh;
  }

  img {
    width: 100%;
    max-height: 30vh;
    object-fit: contain;
    border-radius: 10px;
  }
`;


// HarryPotter component that takes an array of characters as a prop and renders a list of character details.
export default function HarryPotter(props : { data:Character[] } ){
    return(

        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.fullName} status={char.nickname}>
                        <h1><strong>{char.fullName}</strong></h1>
                        <h2>{char.interpretedBy ? `played by: ${char.interpretedBy}` : "played by: Unknown"}</h2>
                        <p>aka {char.nickname}</p>
                        <p>{char.hogwartsHouse ? `House: ${char.hogwartsHouse}` : "House: Unknown"}</p>
                        <img src={char.image} alt={`image of ${char.nickname}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );

}