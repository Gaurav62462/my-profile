import React from "react"
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

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
    education: [{
        board: '',
        class: '',
        passingDate: '',
        Achievements: ''
    }],
    socialLinks: [{
        name: '',
        url: '',
        icon:  AiFillFacebook || AiOutlineInstagram ||AiFillLinkedin || AiOutlineGithub
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
    lang: [{ skillName: '', value: 0 }],
    languages:[''],
    infoDescription:''
}

export type ResumeData = {
    aboutme: string
    title?: string
    name?: string
    dob: string
    role: string
    website: string
    phone: string
    city: string
    email: string
    degree: string
    freelance: string
    address:string
    education: {
        board: string
        class: string
        passingDate: string
        Achievements?: string
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
        Achievements?: string
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
    languages:string[]
    infoDescription:string
}

export type UnderLineTextProps = {
    text:string
    className?:string
}

export type ChipProps = {
    label:string
}