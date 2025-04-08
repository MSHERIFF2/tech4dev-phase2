import { defineStore } from "pinia";


const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "Teaching Qatar", isFav : false },
      {id: 2, title: "Teaching BHA learner", isFav: true},
      {id: 3, title: "Going to Islamiyyah", isFav: true},
    ],

  }), 
  getters: {
    favs: (state) => state.tasks.filter(t => t.isFav),
    favCount: (state) => state.tasks.reduce((count, task) => {
     return task.isFav ? count + 1 : count
    }, 0)
  },
 
})

export default useTaskStore