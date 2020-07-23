import React from "react"
import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./AppStateContext"
import { AppContainer } from "./styles"

function App() {
  const { state } = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      {/* <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column> */}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}

export default App
