import React from 'react'
import { parseISO } from 'date-fns'
import { Area, AreaChart, XAxis, YAxis, Tooltip } from 'recharts';

const Graph = ( {data} ) => {
    return (
        <div>
            <AreaChart width={1580} height={600} data={data}
                margin={{ top: 30, right: 30, left: 30, bottom: 0 }}>
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#ffffff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#5A9CF3" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#5A9CF3" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="0" 
                    reversed={true}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(time) => {
                        const date = parseISO(time)
                        const newDate = date.toString().slice(3,15)
                        return newDate
                    }}
                    domain={['dataMin', 'dataMax']}
                    />
                <YAxis mirror={true} 
                    tickFormatter={(number) => `$${number.toFixed(0)}`}/>
                <Tooltip animationEasing="ease-out" />
                <Area type="monotone" 
                    dataKey="1" 
                    stroke="#426DA6" 
                    fillOpacity={1} 
                    fill="url(#colorUv"/>
            </AreaChart>
        </div>
    )
}

export default Graph
