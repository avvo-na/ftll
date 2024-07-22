import { useState } from "react"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { type Column } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

interface PingFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
}

export function PingFilter<TData, TValue>({
  column,
  title,
}: PingFilterProps<TData, TValue>) {
  const selectedValues = new Set(column?.getFilterValue() as number[])
  const [value, setValue] = useState([250])

  const handleValueChange = (value: number[]) => {
    setValue(value)

    if (value[0] === 250) {
      console.log("reset")
      column?.setFilterValue(undefined)
      return
    }

    column?.setFilterValue(value)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {"<"}
                {value}ms
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-[74px] w-[225px] p-4" align="start">
        <div className="flex items-center space-x-2 p-2">
          <div>
            {value.at(0) === 250 ? (
              <Badge variant="outline" className="h-[25px] w-[65px]">
                250ms+
              </Badge>
            ) : (
              <Badge className="flex h-[25px] w-[65px] text-nowrap">
                {"<"}
                {value}ms
              </Badge>
            )}
          </div>
          <Slider
            defaultValue={[33]}
            min={20}
            max={250}
            onValueChange={handleValueChange}
            value={value}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
