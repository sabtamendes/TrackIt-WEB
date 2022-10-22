import axios from "axios";

function postRegistration(body) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
}

function postForLogin(body) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
}

function listHabitsToday(config) {
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
}

function createHabit(config, body) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
}

function listHabits(config) {
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
}

function deleteHabits(id, config) {
    return axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
}

function habitState(type, id, config) {
    return axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${type}`, {}, config)
}

export {
    postRegistration,
    postForLogin,
    listHabitsToday,
    createHabit,
    listHabits,
    deleteHabits,
    habitState
}