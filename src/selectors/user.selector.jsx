export const selectAuth = store => {
  console.log(store)
  return store
}

export const selectUser = store => store.users

export const selectUsers = store => store.users.users

export const selectAdmins = store => store.users.users

export const selectStudent = store => store.users.user
