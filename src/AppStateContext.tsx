import React, { createContext, useContext, useReducer } from "react"
import { nanoid } from "nanoid"
import { findItemIndexById } from "./utils/findItemIndexById"
import { moveItem } from "./moveItem"

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

export interface AppState {
  lists: List[]
}

interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<Action>
}

type Action =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: {
        listId: string
        text: string
      }
    }
  | {
      type: "MOVE_LIST"
      payload: {
        //from
        dragIndex: number
        //to
        hoverIndex: number
      }
    }

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

export const AppSateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {/* <AppStateContext.Provider value={{ state: appData }}> */}
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      }
    case "ADD_TASK":
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.listId
      )
      state.lists[targetLaneIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text,
      })
      return { ...state }
    case "MOVE_LIST":
      const { dragIndex, hoverIndex } = action.payload
      //sort lists
      state.lists = moveItem(state.lists, dragIndex, hoverIndex)
      return { ...state }
    default:
      return state
  }
}
