import { useState } from "react"
import { BarChart } from '@mui/x-charts/BarChart';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import "./Stats.css"

export const Stats = () => {

    const [data, setData] = useState({
        customers: { amount: [5000, 10000, 13000, 15000], year: ['2020', '2021', '2022', '2023'] },
        visitors: { amount: [30000, 70000, 120000, 150000], year: ['2020', '2021', '2022', '2023'] },
        countries: { amount: [3, 7, 9, 15], year: ['2020', '2021', '2022', '2023'] },
        partners: { amount: [20, 50, 90, 130], year: ['2020', '2021', '2022', '2023'] }
    })
    const [activeData, setActiveData] = useState({})

    return (
        <>

            <div className="bars grid grid-cols-2 items-center justify-center max-w-[1280px] w-[90%] mx-auto max-[700px]:grid-cols-1 gap-5">
                <Dialog>
                    <div className="bars-bar flex flex-col items-center justify-center">
                        <BarChart
                            height={300}
                            series={[
                                { data: data.customers.amount, label: 'Happy customers', id: 'pvId', color: "#ff685b" },
                            ]}
                            xAxis={[{ data: data.customers.year, scaleType: 'band' }]}
                        />
                        <DialogTrigger>
                            <Button className="translate-y-[-15px] flex gap-1 items-center justify-center" onClick={() => {
                                setActiveData(data.customers)
                            }} variant={'outline'}>
                                <i className="fa-regular fa-pen-to-square"></i>
                                Edit
                            </Button>
                        </DialogTrigger>
                    </div>

                    <div className="bars-bar flex flex-col items-center justify-center">
                        <BarChart
                            height={300}
                            series={[
                                { data: data.visitors.amount, label: 'Monthly Visitors', id: 'pvId', color: "#ff685b" },
                            ]}
                            xAxis={[{ data: data.visitors.year, scaleType: 'band' }]}
                        />
                        <DialogTrigger>
                            <Button onClick={() => {
                                setActiveData(data.visitors)
                            }} className="translate-y-[-15px] flex gap-1 items-center justify-center" variant={'outline'}>
                                <i className="fa-regular fa-pen-to-square"></i>
                                Edit
                            </Button>
                        </DialogTrigger>
                    </div>

                    <div className="bars-bar flex flex-col items-center justify-center">
                        <BarChart
                            height={300}
                            series={[
                                { data: data.countries.amount, label: 'Countries Worldwide', id: 'pvId', color: "#ff685b" },
                            ]}
                            xAxis={[{ data: data.countries.year, scaleType: 'band' }]}
                        />
                        <DialogTrigger>
                            <Button onClick={() => {
                                setActiveData(data.countries)
                            }} className="translate-y-[-15px] flex gap-1 items-center justify-center" variant={'outline'}>
                                <i className="fa-regular fa-pen-to-square"></i>
                                Edit
                            </Button>
                        </DialogTrigger>
                    </div>

                    <div className="bars-bar flex flex-col items-center justify-center">
                        <BarChart
                            height={300}
                            series={[
                                { data: data.partners.amount, label: 'Top Partners', id: 'pvId', color: "#ff685b" },
                            ]}
                            xAxis={[{ data: data.partners.year, scaleType: 'band' }]}
                        />
                        <DialogTrigger>
                            <Button onClick={() => {
                                setActiveData(data.partners)
                            }} className="translate-y-[-15px] flex gap-1 items-center justify-center" variant={'outline'}>
                                <i className="fa-regular fa-pen-to-square"></i>
                                Edit
                            </Button>
                        </DialogTrigger>
                    </div>

                    <DialogContent>
                        <h2 className="font-bold text-[26px] font-[Roboto]">Chart editor</h2>
                        <div className="flex flex-col gap-3 font-bold font-[Roboto]">
                            {activeData.year?.map((item, i) => {
                                return <>
                                    <div className="flex items-center justify-between gap-3">
                                        <Label htmlFor={i} className="text-[18px] text-[#ff685b] hover:cursor-pointer">{item}</Label>
                                        <Input id={i} type="number" defaultValue={activeData.amount[i]} />
                                    </div>
                                </>
                            })}
                        </div>
                        <div className="flex items-center justify-end"><Button onClick={() => { location.reload() }} className="bg-[#ff685b] hover:bg-[#ffa198]">Save</Button></div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}