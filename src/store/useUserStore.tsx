import {create} from 'zustand'

interface UserState {
  username?: string
  password?: string
}

// 假如我们需要创建一个store用来存储用户的基本信息
const useUserStore = create((set) => ({
    username: '',
    password: '',
    updateUserState: (newUserInfo: UserState) => set(newUserInfo),
    updatePassword: (newPwd: UserState["password"]) => set({ password: newPwd })
}))

export default useUserStore