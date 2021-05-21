import Cookies from 'universal-cookie'
const cookies = new Cookies()

const cookieName = 'Models/StateModel::PlayerState'

const setPlayerState = (playerState) =>
  cookies.set(cookieName, playerState, {
    path: '/',
    sameSite: 'lax'
  })

const getPlayerState = () => {
  const c = cookies.get(cookieName)

  return cookies.get(cookieName)
}

const deletePlayerState = () => cookies.remove(cookieName)

export { setPlayerState, getPlayerState, deletePlayerState }
