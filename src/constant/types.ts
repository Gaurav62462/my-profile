import React from "react"

export const initialState = {
    aboutme: '',
    title: '',
    name: '',
    role: '',
    dob: '',
    website: '',
    phone: '',
    city: '',
    email: '',
    degree: '',
    freelance: '',
    address:'',
    portfolio: [{
        name: '',
        description: '',
        url: ''
    }],
    education: [{
        board: '',
        class: '',
        passingDate: '',
        Achievements: ''
    }],
    socialLinks: [{
        name: '',
        url: '',
        icon:  null
    }],
    workExperience: [{
        companyName: '',
        specialization: '',
        time: '',
        Achievements: '',
        role:[
            {name:''}
        ]
    }],
    projects: [{
        name: '',
        description: '',
        projectLogo: ''
    }],
    skills: [{
        skillName: ''
    }],
    lang: [{ skillName: '', value: null }]
}

export type ResumeData = {
    aboutme: string
    title: string
    name: string
    dob: string
    role: string
    website: string
    phone: string
    city: string
    email: string
    degree: string
    freelance: string
    address:string
    portfolio: {
        name: string
        description: string
        url: string
    }[]
    education: {
        board: string
        class: string
        passingDate: string
        Achievements: string
    }[],
    socialLinks: {
        name: string
        url: string
        icon: React.ElementType
    }[],
    workExperience: {
        companyName: string
        specialization: string
        time: string
        Achievements: string
        role :{
            name:string
        }[]
    }[],
    projects: {
        name: string
        description: string
        projectLogo: string
    }[],
    skills: {
        skillName: string
    }[],
    lang: { skillName: string, value: number }[]
}