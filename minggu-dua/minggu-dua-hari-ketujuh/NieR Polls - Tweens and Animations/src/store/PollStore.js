import {writable} from 'svelte/store'

const PollStore = writable([
    {
        id: 1,
        question: '2B or A2?',
        answerA: '2B',
        answerB: 'A2',
        votesA: 30,
        votesB: 45,
    },
])

export default PollStore
