import React from 'react'
import './dashboard.scss'
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables, ChartDataLabels);


const BarChart = () => {
    const data = {
        labels: [
          "Jan",
          "Feb",
          "March",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Total Revenue",
            data: [10000, 20000, 50000, 30000, 10000, 40000,20000, 40000, 10000, 30000, 10000, 20000],
            backgroundColor: "transparent",
            borderColor:"rgba(249, 132, 53, 0.44)",
            borderRadius: 10,
            hoverBackgroundColor: '#FF4400',
            borderWidth: 2,
          },
        ],
      };
  return (
    <div className="bar mt-40">
        <Bar 
            data={data} 
            options={{
                plugins:{
                    legend:{
                        display: false,
                        position: "top",
                        align: "center",
                        labels:{
                            font:{
                                family: "Lato",
                                size: 12
                            },
                            color: "#373D3F",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            boxWidth: 40,
                            padding: 20,
                            // usePointStyle: true

                        },
                        
                    },
                    datalabels: {
                        display: false,
                        // color:'#ffffff',
                        // font:{
                        //     family: "Poppins",
                        //     size: 10
                        // },
                    }
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 120
                    }
                },
                scales: {
                  xAxis: {
                    ticks:{
                        display: true,
                        padding: 10,
                        font:{
                            family: "Lato",
                            size: 10,
                            weight: 'bold'
                        },
                    },
                    grid: {
                      display: false,
                      drawBorder: false
                  }
                  },
                  yAxis: {
                    ticks:{
                        display: true,
                        padding: 10,
                        font:{
                            family: "Lato",
                            size: 10,
                            weight: 'bold'
                        },
                    },
                    grid: {
                      display: true,
                      drawBorder: false,
                      color: 'rgba(249, 132, 53, 0.44)',
                      borderDash: [2, 5],
                  }
                  }
                },
                
            }} 
        />
    </div>
  )
}

export default BarChart