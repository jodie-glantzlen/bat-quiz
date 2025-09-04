import { createContext, useContext, useState } from 'react'
import type { Player, PlayerContextType } from '../../../types'
import type { ReactNode } from 'react'

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<Player>({ name: '', score: 0 })
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  )
}
