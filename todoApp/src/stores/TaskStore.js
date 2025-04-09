import { defineStore } from "pinia";


const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [
      { id: 1, title: "Teaching Qatar", isFav: false },
      { id: 2, title: "Teaching BHA learner", isFav: false },
      { id: 3, title: "Going to Islamiyyah", isFav: false },
    ],

  }),
  getters: {
    favs: (state) => state.tasks.filter(t => t.isFav),
    favCount: (state) => state.tasks.reduce((count, task) => {
      return task.isFav ? count + 1 : count
    }, 0),
    allCount: (state) => state.tasks.length
  },
  actions: {
    add(task) {
      this.tasks.push({
        id: Date.now(),
        title: task,
        isFav: true
      });
      this.saveTask();
    },
    saveTask() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    toggleFav(task) {
      task.isFav = !task.isFav
      this.saveTask()
    }
  }

})

export default useTaskStore