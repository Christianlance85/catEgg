import Pocketbase from 'pocketbase'
import { signal } from "@preact/signals";


export const pb = new Pocketbase('hulkapi.com:80')
console.log('THIS IS POCKETBASE INIT', pb)

export const currentUser = signal(pb.authStore.model)
console.log('THIS IS CURRENT USER', currentUser)



pb.authStore.onChange((user) => {
    console.log('THIS IS USER', user)
    currentUser.value?.set(user)
    }
)