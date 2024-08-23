import useSWR from 'swr'
import { fetchInvestment } from './fetch-investment'

export function useInvestment() {
  return useSWR('/investment', fetchInvestment)
}
