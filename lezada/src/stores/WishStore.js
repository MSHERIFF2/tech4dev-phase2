import axios from 'axios'
import {defineStore} from 'pinia'

export const useStore = defineStore('wishStore', {
    state: () => ( {
         wishList : [],
         Product: [] ,
         active: true,
    }),
   
    getters: {
        wishListLength: (state) =>  state.wishList.length,
    },
    actions: {
       async getProduct(id) {
        const token = localStorage.getItem("token")
        if (!token) {
            console.log("Invalid User")
            return
        }
        try{
            const res = await axios.get('http://134.209.223.106/api/products/' + id)
            if (res.status === 200) {
                this.Product.push(... res.data.data.data) 
            }
           
        } catch (error) {
            console.log(error)
        }
       
       },
        toggleActive (){
            this.active = !this.active
        } 
        }
    }
)