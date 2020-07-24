import React from "react"
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./AppStateContext"
import { Card } from "./Card"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
  id: string
  text: string
  index: number
}

export const Column = ({ id, text, index }: ColumnProps) => {
  const { state, dispatch } = useAppState()

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
        dark
      />
    </ColumnContainer>
  )
}
