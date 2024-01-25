import { create } from 'zustand'

const AppState = create((set) => ({
    Blogs: [],
    Loading: true,
    SetState: (AppUpdates: object) => set(() => ({ ...AppUpdates }))
}))

export default AppState