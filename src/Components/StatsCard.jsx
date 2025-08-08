import React  from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";



export default function StatsCard({}){
    const stats= [
        {
            title : "Total page views",
            value : "4,42,236",
            change : "159.3%",
            positive:true,
            extra : "you made an extra 35,000 this year",
            chnageColor : "text-blue-500"
        },
        ,
    {
      title: "Total Users",
      value: "78,250",
      change: "+70.5%",
      positive: true,
      extra: "You made an extra 8,900 this year",
      changeColor: "text-green-500",
    },
    {
      title: "Total Order",
      value: "18,800",
      change: "-27.4%",
      positive: false,
      extra: "You made an extra 1,943 this year",
      changeColor: "text-yellow-500",
    },
    {
      title: "Total Sales",
      value: "$35,078",
      change: "-27.4%",
      positive: false,
      extra: "You made an extra $20,395 this year",
      changeColor: "text-red-500",
    },
    ];
     return (
        <div className="flex gap-4 p-6">
            
            {stats.map((stat, index)=>(
                <div key={index} className="bg-white shadow rounded-lg p-4 border border-gray-200 flex-1 min-w-[250px]">
                    <h3  className="text-sm font-medium text-gray-500"> {stat.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
            <p className="text-2xl font-bold">{stat.value}</p>
            <span
              className={`flex items-center text-sm ${stat.changeColor} ${stat.bgColor} px-2 py-0.5 rounded`}
            >
              {stat.positive ? <FaArrowTrendUp /> : <FaArrowTrendDown  />}
              {stat.change}
            </span>
          </div>
           <p className="text-xs text-gray-500 mt-1">{stat.extra}</p>
        </div>
            ))} 

        </div>
     )
}
