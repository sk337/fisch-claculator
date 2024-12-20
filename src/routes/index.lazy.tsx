import { useState } from 'react'
import { RodType } from '$/rods'
import { createLazyFileRoute } from '@tanstack/react-router'
import { SelectRod } from '$/selectRod'
import { MutationType } from '$/mutations'
import { SelectMutation } from '$/selectMutation'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const [selectedRod, setSelectedRod] = useState<RodType | undefined>()
  const [selectedMutation, setSelectedMutation] = useState<MutationType | undefined>()
  
  return (
    <div className="p-2">
      <SelectRod onChange={setSelectedRod} value={selectedRod} />
      <SelectMutation onChange={setSelectedMutation} value={selectedMutation} />
    </div>
  )
}