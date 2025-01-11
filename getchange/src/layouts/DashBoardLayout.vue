<template>
    <div class="flex flex-col">
        
        <div class="top red-500 text-center"><slot /></div>
        <div class="flex justify-between my-6 cyan-900">
            <div class="w-60 h-full green-300 p-3">
                <h1>User Profile</h1>
            </div>
            <div class="flex flex-col w-4/5">
                <div class="my-6 p-12">
                    <div class="flex justify-between bg-gray-100">
                        <p>Store Wallet</p>
                        <p>₦2,500</p>
                        <button class=" w-1/5  bg-green-600 text-white text-center">Top up wallet</button>
                    </div>
                    <div class="flex justify-between my-6 bg-gray-100">
                        <p>Total Disbursed</p>
                        <p>₦12,000</p>
                        <button class=" w-1/5  bg-smoke-300 text-gray text-center">View History</button>
                    </div>
                    <div></div>
                </div>
                <div>
                    <p>recient activities</p>
                    <div >
                       <table>
                        <tr>
                            <th>#</th>
                            <th>DESCRIPTION</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>STAFF</th>
                            <th>AMOUNT</th>
                        </tr>
                        <tr v-for="inventory in inventories" :key="inventory.id">
                            <td>{{ inventory.id }}</td>
                            <td>{{ inventory.Description }}</td>
                            <td>{{ inventory.Time }}</td>
                            <td>{{ inventory.Date }}</td>
                            <td>{{ inventory.Staff}}</td>
                            <td>{{ inventory.Amount }}</td>
                        </tr>
                       </table>
                    </div>
                </div>
            </div>
            <div class="right ">
                <h1>Calendar for event</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DashBoardLayout",
    data() {
        return {
            inventories : [
              {
                   id: 0,
                    Description: "Wallet top up",
                    Date: "06 Aug, 2019",
                    Time: "12:24PM",
                    Staff: "Admin",
                    Amount: "NGN2000.00"

                },
              {
                   id: 1,
                    Description: "Wallet top up",
                    Date: "06 Aug, 2019",
                    Time: "12:24PM",
                    Staff: "Admin",
                    Amount: "NGN2000.00"

                },
              {
                   id: 2,
                    Description: "Wallet top up",
                    Date: "06 Aug, 2019",
                    Time: "12:24PM",
                    Staff: "Admin",
                    Amount: "NGN2000.00"

                },
              {
                   id:3,
                    Description: "Wallet top up",
                    Date: "06 Aug, 2019",
                    Time: "12:24PM",
                    Staff: "Admin",
                    Amount: "NGN2000.00"

                },
              {
                   id: 4,
                    Description: "Wallet top up",
                    Date: "06 Aug, 2019",
                    Time: "12:24PM",
                    Staff: "Admin",
                    Amount: "NGN2000.00"

                },
            ]
            }
        }
    }

</script>