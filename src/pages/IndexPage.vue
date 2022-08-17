<template>
  <q-page padding>
    <Container>
      <form @submit.prevent="onSubmit" autocomplete="off">
        <q-input
          filled
          bottom-slots
          v-model="text"
          label="New Task"
          minlength="1"
        >
          <template v-slot:append>
            <q-btn round dense flat icon="send" @click="onSubmit" />
          </template>
        </q-input>
      </form>

      <div class="noTasks" v-if="!tasks[0]">
        <q-icon name="task_alt" />
        <span>All done</span>
        <p>You have no tasks assigned or all your tasks were completed</p>
        <p>You can add new task</p>
      </div>

      <!-- list -->
      <q-list bordered separator v-else>
        <transition-group name="list">
          <q-item
            clickable
            v-ripple
            v-for="(task, i) in tasks"
            :key="i"
            @click="remove(task)"
          >
            <q-item-section>{{ task.content }}</q-item-section>
            <q-item-section side
              ><q-item-label caption>
                {{ task.date }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </Container>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { uniqueId, newDateInSeconds, setTime } from '../shared/DataMethods';
import { Todo } from '../shared/Models';
import { setData, getData, removeTask } from '../shared/TodoMethods';

import Container from '../components/Container.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Container,
  },
  data() {
    return {
      text: '',
      tasks: [] as Todo[],
    };
  },
  methods: {
    onSubmit() {
      if (this.text == '') return;
      const todo: Todo = {
        id: uniqueId(),
        content: this.text,
        date: newDateInSeconds(),
      };
      setData(todo);

      this.text = '';
      todo.date = setTime(todo.date);
      this.tasks.unshift(todo);
    },
    remove(task: Todo) {
      removeTask(task);

      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
  },
  mounted() {
    this.tasks = getData();
  },
});
</script>
