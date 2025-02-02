<template>
    <div class="container flex flex-col w-full h-full">
        <div class="top w-full mt-2 border flex gap-x-3 p-3">
           <div v-for="contribution in contributionLog" :key="contribution['#']">
            <div class="w-24 border">
                <p class="mx-3">{{contribution['#']}}</p>
                <p class="mx-3">{{contribution['Description']}}</p>

            </div>
           </div> 
                    
           

        </div>
       
        <div class="bottom w-full h-full">
            <table class="w-full">
                <thead class="w-full">
                    <tr class="w-full flex justify-evenly items-center gap-x-3">
                        <th>#</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Staff</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr class="w-full flex justify-evenly items-center text-[#6A7E8A] bg-[#FFFFFF] rounded my-4 p-3 gap-x-3 " v-for="contribution in contributionLog" :key="contribution['#']">
                        <td>{{ contribution['#'] }}</td>
                        <td>{{ contribution['Description'] }}</td>
                        <td>{{ contribution['Date'] }}</td>
                        <td>{{ contribution['Time'] }}</td>
                        <td>{{ contribution['Staff'] }}</td>
                        <td>{{ contribution['Amount'] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
          const  contributionLog = ref(
            [
                {
                    "#": 1,
                    "Description": "Monthly Contribution",
                    "Date": "2022-01-15",
                    "Time": "10:00 AM",
                    "Staff": "John Doe",
                    "Amount": 500.00
                },
                {
                    "#": 2,
                    "Description": "Monthly Contribution",
                    "Date": "2022-01-15",
                    "Time": "10:05 AM",
                    "Staff": "Jane Smith",
                    "Amount": 500.00
                },
                {
                    "#": 3,
                    "Description": "Monthly Contribution",
                    "Date": "2022-01-15",
                    "Time": "10:10 AM",
                    "Staff": "Michael Brown",
                    "Amount": 500.00
                },
                {
                    "#": 4,
                    "Description": "Monthly Contribution",
                    "Date": "2022-01-15",
                    "Time": "10:15 AM",
                    "Staff": "Emily Davis",
                    "Amount": 500.00
                },
                {
                    "#": 5,
                    "Description": "Monthly Contribution",
                    "Date": "2022-01-15",
                    "Time": "10:20 AM",
                    "Staff": "David Lee",
                    "Amount": 500.00
                },
                {
                    "#": 6,
                    "Description": "Monthly Contribution",
                    "Date": "2022-01-15",
                    "Time": "10:25 AM",
                    "Staff": "Sarah Taylor",
                    "Amount": 500.00
                }
            ]

          ) 
 
</script>