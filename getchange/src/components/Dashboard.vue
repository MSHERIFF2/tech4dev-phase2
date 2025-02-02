<template>
    <div class="flex flex-col border border-4 w-auto">
        <div class="top  flex-col  mt-4">
            <div class="flex justify-between items-center w-2xl m-4 bg-white px-2 py-1 rounded">
                <span class="text-[#013C61] text-xl">Store Wallet</span>
                <span class=" font-bold text-xl text-[#013C61]"> ₦ 2,500
                </span>
                <button class="p-3 text-white bg-green-500">Top up wallet</button>
            </div>
            <div class="flex justify-between items-center w-2xl m-4 bg-white px-2 py-1 rounded">
                <span class=" text-xl text-[#013C61]">Total Disbursed</span>
                <span class=" font-bold text-xl text-[#013C61]"> ₦
                    12,000
                </span>
                <button class="p-3 text-gray-500 border">View History</button>
            </div>

        </div>
        <div class="middlez w-full p-6">
            <div class=" text-[#013C61] flex justify-between items-center w-full">
                <span>Recent Activities</span>
                <div class="flex justify-around items-center gap-x-3">
                    <button>1</button>
                    <span>of</span>
                    <span>8</span>
                    <div class="flex justify-around items-center gap-x-3">
                        <button class="text-xs rounded-full w-16 h-8 bg-[#2BDA53] text-[#FFFFFF]">
                            &lt; </button>

                        <button class=" text-xs rounded-full w-16 h-8 bg-[#2BDA53] text-[#FFFFFF]">
                            &gt;
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mt-4">
            <table class=" table-auto w-full text-left border-separate border-spacing-y-2">
                <thead>
                    <tr class="w-full flex justify-evenly items-center gap-x-3">
                        <th>#</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Staff</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="w-full flex justify-evenly items-center text-[#6A7E8A] bg-[#FFFFFF] rounded my-4 p-3 gap-x-3 "
                        v-for="contribution in contributionLog" :key="contribution['#']">
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
const contributionLog = ref([
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