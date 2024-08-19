import useSWR from 'swr'
import { fetchTeams } from './fetch-teams'

export function useTeams() {
  return useSWR('/teams', fetchTeams
    
  )
}
