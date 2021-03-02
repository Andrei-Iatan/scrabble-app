import "./App.css";
import initiateGrid, { initiateHand, letterObj } from "./initiate.js";
// import Hand from "./hand.js";
import React, { useState } from "react";
import "./index.css";
import { styleDroppedLetter } from "./utils.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function pickLetters() {
  const hand = [];

  for (let i = 0; i < 7; i++) {
    const r = Math.floor(Math.random() * letterObj.length);
    hand.push({ id: letterObj[r].id, letter: letterObj[r].letter });
    letterObj.splice(letterObj.indexOf(letterObj[r]), 1);
  }
  return hand;
}

function CreateGrid() {
  const [board, updateBoard] = useState(initiateGrid());
  const [letters, updateLetters] = useState("");
  if (!letters) updateLetters(pickLetters());
  // console.log(letters);
  // console.log(letterObj);
  const [letter, updateLetter] = useState("");
  const [letterIndex, updateLetterIndex] = useState(0);

  function handleDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === "letters" &&
      source.droppableId === "letters"
    ) {
      const items = Array.from(letters);
      const [reorderedItems] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItems);

      updateLetters(items);
    } else if (destination.droppableId === "grid") {
      const newBoard = Array.from(board);
      const newHand = Array.from(letters);
      newBoard[letterIndex].text = letter;
      newBoard[letterIndex].style = styleDroppedLetter;
      newHand.splice(source.index, 1);
      letterObj.splice(draggableId.slice(1), 1);
      // console.log(letterObj);

      updateLetters(newHand);
      updateBoard(newBoard);
    }
  }

  function getStyle(style, snapshot) {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,
      transitionDuration: `0.001s`,
    };
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="grid" direction="horizontal">
          {(provided) => (
            <div
              className="container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {board.map((el, index) => {
                return (
                  <div
                    className="boxText"
                    style={el.style}
                    key={el.id}
                    onMouseUp={() => {
                      updateLetterIndex(index);
                    }}
                  >
                    {el.text}
                  </div>
                );
              })}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="letters" direction="horizontal">
          {(provided) => (
            <div
              className="hand"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {letters.map((l, index) => {
                return (
                  <Draggable
                    key={l.letter + l.id}
                    draggableId={l.letter + l.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="handBox"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getStyle(
                          provided.draggableProps.style,
                          snapshot
                        )}
                        ref={provided.innerRef}
                        onMouseDown={() => {
                          updateLetter(l.letter);
                        }}
                      >
                        <p className="boxText">{l.letter}</p>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className="resetBtn"
        onClick={() =>
          updateLetters(() => {
            // let i = letters.length;
            // if (i == 7) return;
            // else {
            //   letters.push({ id: 101, letter: "Z" });
            // }
            // console.log(letters);
          })
        }
        // onClick={() => console.log(letters.length)}
      >
        Add letters
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CreateGrid></CreateGrid>
    </div>
  );
}

export default App;
