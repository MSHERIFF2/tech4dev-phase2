<template>
    <div class="flex flex-col">

        <div class="top red-500 text-center bg-[#FFFFFF]">
            <slot />
        </div>
        <div class="flex justify-between my-6 cyan-900">
            <div class="w-60 h-full green-300 p-3">
                <h1>User Profile</h1>
                <div>
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <rect x="1" y="1" width="22" height="16" rx="2" stroke="#013C61" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 7H23" stroke="#013C61" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </g>
                    </svg>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path
                                d="M17 19.3333V17.2963C17 15.0463 15.2091 13.2222 13 13.2222H5C2.79086 13.2222 1 15.0463 1 17.2963V19.3333"
                                stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9 9.14815C11.2091 9.14815 13 7.32412 13 5.07407C13 2.82403 11.2091 1 9 1C6.79086 1 5 2.82403 5 5.07407C5 7.32412 6.79086 9.14815 9 9.14815Z"
                                stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23 19.3333V17.2963C22.9986 15.4396 21.765 13.8188 20 13.3546" stroke="#013C61"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M16 1.13242C17.7699 1.59398 19.0078 3.21833 19.0078 5.07917C19.0078 6.94002 17.7699 8.56437 16 9.02593"
                                stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>

                </div>
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
                    <div>
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
                                <td>{{ inventory.Staff }}</td>
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
            inventories: [
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
                    id: 3,
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