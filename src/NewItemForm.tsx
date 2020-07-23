import React, { useState } from "react"
import { useFocus } from "./utils/useFocus"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("")
  const { onAdd } = props
  const inputRef = useFocus()

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}
