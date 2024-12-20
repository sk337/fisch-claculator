import { useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { RodType } from '$/rods'
import { SelectRod } from '$/selectRod'
import { MutationType } from '$/mutations'
import { SelectMutation } from '$/selectMutation'
import { SeasonType } from '$/season'
import { SelectSeason } from '$/selectSeason'
import { BaitType } from '$/baits'
import { SelectBait } from '$/selectBait'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const [selectedRod, setSelectedRod] = useState<RodType | undefined>()
  const [selectedMutation, setSelectedMutation] = useState<MutationType | undefined>()
  const [selectedSeason, setSelectedSeason] = useState<SeasonType | undefined>()
  const [selectedBait, setSelectedBait] = useState<BaitType | undefined>()
  
  return (
    <div className="p-2">
      <SelectRod onChange={setSelectedRod} value={selectedRod} />
      <SelectMutation onChange={setSelectedMutation} value={selectedMutation} />
      <SelectSeason onChange={setSelectedSeason} value={selectedSeason} />
      <SelectBait onChange={setSelectedBait} value={selectedBait} />
    </div>
  )
}