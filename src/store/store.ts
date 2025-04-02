import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface ModalState {
    status: boolean
}
export const useModalState = create<ModalState>((set) => ({
    status: false,
}))
interface forumData {
    id: number,
    data: any
}
export const useForumData = create<forumData>()(
    persist(
        (set) => ({
            id: 0,
            data: null
        }),
        {
            name: 'forumData', // name of the item in the storage (must be unique)
        },
    ),
)
interface userData {
    id: number,
    data: any
}
export const useUserData = create<userData>()(
    persist(
        (set) => ({
            id: 0,
            data: null
        }),
        {
            name: 'userData', // name of the item in the storage (must be unique)
        },
    ),
)
interface DropDownState {
    gradeLevel: boolean
    section: boolean
}
export const useDropDownState = create<DropDownState>((set) => ({
    gradeLevel: false,
    section: false,
}))

interface section {
    data: any,
    addSection: any
}
export const useSection = create<section>()(
    persist(
        (set) => ({
            data: [],
            addSection: (payload: any) => {
                set((state) => ({
                    ...state, data: [...state.data, payload]
                }))
            }
        }),
        {
            name: 'section', // name of the item in the storage (must be unique)
        },
    ),
)
interface faculty {
    data: any,
    teacher: any,
    addFaculty: any,
    deleteFaculty: any
}
export const useFaculty = create<faculty>()(
    persist(
        (set, get) => ({
            data: [],
            teacher: null,
            addFaculty: (payload: any) => {
                set((state) => ({
                    ...state, data: [...state.data, payload]
                }))
            },
            deleteFaculty: (id: any) => {

                set((state) => ({
                    data: state.data.filter((e: any) => e.id != id)
                }))
            }
        }),
        {
            name: 'faculty', // name of the item in the storage (must be unique)
        },
    ),
)
interface student {
    data: any,
    addStudent: any
    deleteStudent: any
}
export const useAddStudent = create<student>()(
    persist(
        (set) => ({
            data: [],
            addStudent: (payload: any) => {
                set((state) => ({
                    ...state, data: [...state.data, payload]
                }))
            },
            deleteStudent: (id: any) => {

                set((state) => ({
                    ...state, data: [...state.data, state.data.filter((e: any) => e.id != id)]
                }))
            }
        }),
        {
            name: 'studentList', // name of the item in the storage (must be unique)
        },
    ),
)

